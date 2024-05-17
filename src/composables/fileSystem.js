import fs from '@zenfs/core'

export function useFileSystem() {
  function initialiseFileSystem() {
    fs.mkdirSync('/users')
    fs.mkdirSync('/users/oscar')
    fs.writeFileSync('/users/oscar/about-me.txt', 'Hello from about-me.txt')
  }

  function doesFolderExist(folder) {
    return fs.existsSync(folder)
  }

  return {
    initialiseFileSystem,
    doesFolderExist
  }
}