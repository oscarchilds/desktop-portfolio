import { computed, ref } from "vue"
import { useFileSystem } from "./fileSystem";

export function useFileBrowser() {
  const { doesFolderExist } = useFileSystem()

  const homeDir = '/users/oscar'
  const currentDir = ref(homeDir)

  const friendlyCurrentDir = computed(() => {
    return currentDir.value === homeDir ? '~' : currentDir.value
  })

  function goUpOneDir() {
    const goingToRoot = currentDir.value.split('/').length === 2

    if (goingToRoot) {
      currentDir.value = '/'
      return
    }

    const lastSlashIndex = currentDir.value.lastIndexOf('/');
    currentDir.value = currentDir.value.substring(0, lastSlashIndex);
  }

  function goToHomeDir() {
    currentDir.value = homeDir
  }

  function goToDir(target) {
    const fullTargetDir = `${currentDir.value}/${target}`.replace('//', '/')

    if (doesFolderExist(fullTargetDir)) {
      currentDir.value = fullTargetDir
    }
  }

  function changeDirectory(input) {
    const target = input[0]

    if (!target) {
      goToHomeDir()
      return
    }

    if (target === '..') {
      goUpOneDir()
      return
    }

    goToDir(target)
  }

  return {
    currentDir,
    friendlyCurrentDir,
    goUpOneDir,
    goToHomeDir,
    changeDirectory
  }
}