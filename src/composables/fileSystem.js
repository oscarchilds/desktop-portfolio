import fs from '@zenfs/core'

export function useFileSystem() {
  function initialiseFileSystem() {
    fs.mkdirSync('/users')
    fs.mkdirSync('/users/oscar')
    fs.writeFileSync('/users/oscar/about-me.txt', 'Hello from about-me.txt')
  }

  function doesFolderExist(dir) {
    return fs.existsSync(dir)
  }

  function readDir(dir) {
    return fs.readdirSync(dir)
  }

  return {
    initialiseFileSystem,
    doesFolderExist,
    readDir
  }
}