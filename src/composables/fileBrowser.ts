import { computed, ref } from "vue"
import { useFileSystem } from "./fileSystem"
import { programs } from "@data/programs"
import FileBrowserItem from "types/fileBrowserItem"
import FileBrowserFile from "types/fileBrowserFile"

export function useFileBrowser() {
  const { doesFolderExist, readDirGetDirents, getDirentStat } = useFileSystem()

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

  function goToDir(target: string) {
    const fullTargetDir = `${currentDir.value}/${target}`.replace('//', '/')

    goToFullDir(fullTargetDir)
  }

  function goToFullDir(fullTargetDir: string) {
    if (doesFolderExist(fullTargetDir)) {
      currentDir.value = fullTargetDir
    }
  }

  function changeDirectory(input: string) {
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

  function searchForDirectory(fullTargetDir: string) {
    const folderExists = doesFolderExist(fullTargetDir)

    if (folderExists) {
      goToFullDir(fullTargetDir)
      return true
    } else {
      return false
    }
  }

  function readDirForFileBrowser(fullTargetDir: string) {
    const dirents = readDirGetDirents(fullTargetDir)

    function padToTwo(value: number) {
      return value.toString().padStart(2, '0')
    }

    const files = dirents
      .filter(x => !x.isDirectory())
      .map(file => {
        const fullPath = `${fullTargetDir}/${file.name}`
        const stats = getDirentStat(fullPath)
        const mtime = stats.mtime

        const extension = file.name.split('.').pop() as string

        const program = programs.find(x => x.fileTypes?.includes(extension))

        if (!program) {
          throw (`No program found for filetype ${extension}`)
        }

        var result: FileBrowserFile = {
          name: file.name,
          isDirectory: false,
          fullPath: fullPath,
          selected: false,
          renaming: false,
          icon: program.icon,
          program: program,
          size: stats.size,
          lastModified: `${padToTwo(mtime.getDay())}/${padToTwo(mtime.getMonth())}/${mtime.getFullYear()} ${padToTwo(mtime.getHours())}:${padToTwo(mtime.getMinutes())}`
        }

        return result
      })

    const directories = dirents
      .filter(x => x.isDirectory())
      .map(file => {
        const fullPath = `${fullTargetDir}/${file.name}`
        const stats = getDirentStat(fullPath)
        const mtime = stats.mtime

        var result: FileBrowserItem = {
          name: file.name,
          isDirectory: true,
          fullPath: fullPath,
          selected: false,
          renaming: false,
          icon: 'folder',
          lastModified: `${padToTwo(mtime.getDay())}/${padToTwo(mtime.getMonth())}/${mtime.getFullYear()} ${padToTwo(mtime.getHours())}:${padToTwo(mtime.getMinutes())}`
        }

        return result
      })

    var result: FileBrowserItem[] = directories.concat(files)

    console.log(result)
    return result
  }

  return {
    currentDir,
    friendlyCurrentDir,
    goUpOneDir,
    goToHomeDir,
    changeDirectory,
    searchForDirectory,
    readDirForFileBrowser,
    goToDir
  }
}