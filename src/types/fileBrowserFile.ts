import FileBrowserItem from "./fileBrowserItem"
import Program from "./program"

export default interface FileBrowserFile extends FileBrowserItem {
  size: string,
  program?: Program,
  url?: string
}