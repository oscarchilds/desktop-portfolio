export default interface FileBrowserItem {
  name: string,
  isDirectory: boolean,
  fullPath: string,
  selected: boolean,
  renaming: boolean,
  lastModified: string,
  icon: string
}