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

  function readDir(dir, options = {}) {
    return fs.readdirSync(dir, options)
  }

  function getDirentStat(direntPath) {
    return fs.statSync(direntPath)
  }

  return {
    initialiseFileSystem,
    doesFolderExist,
    readDir,
    getDirentStat
  }
}