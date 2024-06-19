import fs from '@zenfs/core'
import aboutMe from '../data/files/txt/aboutMe.ts'
import linkedIn from '../data/files/url/linkedIn.ts'
import github from '../data/files/url/github.ts'

export function useFileSystem() {
  function initialiseFileSystem() {
    fs.mkdirSync('/users')
    fs.mkdirSync('/users/oscar')
    fs.mkdirSync('/users/oscar/desktop')
    fs.mkdirSync('/users/oscar/desktop/my-work')
    fs.writeFileSync('/users/oscar/about-me.txt', aboutMe)
    fs.writeFileSync('/users/oscar/desktop/LinkedIn - Oscar Childs.url', linkedIn)
    fs.writeFileSync('/users/oscar/desktop/Github - oscarchilds.url', github)
  }

  function doesFolderExist(dir: string) {
    return fs.existsSync(dir)
  }

  function readDir(dir: string) {
    return fs.readdirSync(dir)
  }

  function readDirGetDirents(dir: string) {
    return fs.readdirSync(dir, { withFileTypes: true })
  }

  function getDirentStat(direntPath: string) {
    return fs.statSync(direntPath)
  }

  function openFile(filePath: string) {
    return fs.readFileSync(filePath, 'utf8')
  }

  function makeDir(fullNewDirPath: string) {
    fs.mkdirSync(fullNewDirPath)
  }

  function remove(fullDirPath: string) {
    fs.rmSync(fullDirPath)
  }

  function rename(oldFullDirPath: string, newFullDirPath: string) {
    fs.renameSync(oldFullDirPath, newFullDirPath)
  }

  return {
    initialiseFileSystem,
    doesFolderExist,
    readDir,
    readDirGetDirents,
    getDirentStat,
    openFile,
    makeDir,
    remove,
    rename
  }
}