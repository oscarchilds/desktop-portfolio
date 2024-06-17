import type LineData from "./lineData"

export default interface Command {
  name: string,
  description: string,
  clear: boolean,
  lineData?: LineData
}