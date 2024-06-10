import { computed, ref } from "vue"
import { useFileSystem } from "./fileSystem";

export function useFileBrowser() {
  const { doesFolderExist, readDir, getDirentStat } = useFileSystem()

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

    goToFullDir(fullTargetDir)
  }

  function goToFullDir(fullTargetDir) {
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

  function searchForDirectory(fullTargetDir) {
    const folderExists = doesFolderExist(fullTargetDir)

    if (folderExists) {
      goToFullDir(fullTargetDir)
      return true
    } else {
      return false
    }
  }

  function readDirForFileBrowser(fullTargetDir) {
    const options = {
      withFileTypes: true
    }

    const files = readDir(fullTargetDir, options)

    function padToTwo(value) {
      return value.toString().padStart(2, 0)
    }

    return files.map(file => {
      const stats = getDirentStat(`${fullTargetDir}/${file.name}`)
      const mtime = stats.mtime

      return {
        name: file.name,
        size: file.isDirectory() ? '' : stats.size,
        isDirectory: file.isDirectory(),
        lastModified: `${padToTwo(mtime.getDay())}/${padToTwo(mtime.getMonth())}/${mtime.getFullYear()} ${padToTwo(mtime.getHours())}:${padToTwo(mtime.getMinutes())}`
      }
    })
  }

  return {
    currentDir,
    friendlyCurrentDir,
    goUpOneDir,
    goToHomeDir,
    changeDirectory,
    searchForDirectory,
    readDirForFileBrowser
  }
}