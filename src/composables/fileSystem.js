import fs from '@zenfs/core'
import aboutMe from '@data/files/txt/aboutMe'

export function useFileSystem() {
  function initialiseFileSystem() {
    fs.mkdirSync('/users')
    fs.mkdirSync('/users/oscar')
    fs.mkdirSync('/users/oscar/desktop')
    fs.writeFileSync('/users/oscar/about-me.txt', aboutMe)
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

  function openFile(filePath) {
    const options = { encoding: 'utf8' }
    return fs.readFileSync(filePath, options)
  }

  function makeDir(fullNewDirPath) {
    return fs.mkdirSync(fullNewDirPath)
  }

  function remove(fullDirPath) {
    return fs.rmSync(fullDirPath)
  }

  function rename(oldFullDirPath, newFullDirPath) {
    return fs.renameSync(oldFullDirPath, newFullDirPath)
  }

  return {
    initialiseFileSystem,
    doesFolderExist,
    readDir,
    getDirentStat,
    openFile,
    makeDir,
    remove,
    rename
  }
}