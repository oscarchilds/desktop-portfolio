import { markRaw } from 'vue'
import Program from 'types/program'
import ConsoleComponent from "../components/console/ConsoleComponent.vue"
import Notepad from "../components/notepad/Notepad.vue"
import FileBrowser from "../components/fileBrowser/FileBrowser.vue"

export const consoleProgram = {
  component: markRaw(ConsoleComponent),
  name: 'console',
  icon: 'terminal'
} as Program

export const notepad = {
  component: markRaw(Notepad),
  name: 'notepad',
  icon: 'file-pen',
  fileTypes: ['txt']
} as Program

export const fileBrowser = {
  component: markRaw(FileBrowser),
  name: 'file browser',
  icon: 'folder'
} as Program

export const programs = [consoleProgram, notepad, fileBrowser]