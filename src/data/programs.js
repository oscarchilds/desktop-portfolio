import { markRaw } from 'vue'
import ConsoleComponent from "@components/console/ConsoleComponent.vue"

export const consoleProgram = {
  component: markRaw(ConsoleComponent),
  name: 'console'
}

export const programs = [consoleProgram]