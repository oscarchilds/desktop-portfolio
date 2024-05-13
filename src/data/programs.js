import { markRaw } from 'vue'
import ConsoleComponent from "@components/console/ConsoleComponent.vue"
import Notepad from "@components/notepad/Notepad.vue"

export const consoleProgram = {
  component: markRaw(ConsoleComponent),
  name: 'console'
}

export const programs = [
  consoleProgram,
  {
    component: markRaw(Notepad),
    name: 'notepad'
  }
]