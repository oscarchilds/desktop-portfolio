import Program from "./program"

export default interface DesktopWindow {
  id: string,
  program: Program,
  minimised: boolean,
  draggable: GSAPDraggableVars,
  focused: boolean,
  focusOrder: number,
  filePath: string
}