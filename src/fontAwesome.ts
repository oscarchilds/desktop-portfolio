import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faX, faExpand, faWindowMinimize, faTerminal, faFilePen, faFolder, faUpLong, faFolderPlus, faArrowsRotate, faTrash, faPen } from '@fortawesome/free-solid-svg-icons'

export default function setupFontAwesome() {
  library.add([faX, faExpand, faWindowMinimize, faTerminal, faFilePen, faFolder, faUpLong, faFolderPlus, faArrowsRotate, faTrash, faPen])
  return FontAwesomeIcon
}