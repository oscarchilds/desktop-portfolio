import { defineStore } from "pinia"
import { consoleProgram } from "@data/programs.js"

export const useDesktopManagementStore = defineStore('desktopManagment', {
  state: () => ({
    windows: [
      {
        id: `id-${self.crypto.randomUUID()}`,
        program: consoleProgram,
        minimised: false,
        draggable: null
      }
    ]
  }),
  actions: {
    closeWindow(id) {
      this.windows = this.windows.filter(x => x.id !== id)
    },
    openProgram(program) {
      this.windows.push({
        id: `id-${self.crypto.randomUUID()}`,
        program: program,
        open: true,
        minimised: false
      })
    },
    setWindowDraggable(id, draggable) {
      const window = this.windows.find(x => x.id === id)

      if (!window) console.error(`Error closing window with ID ${id}`)

      window.draggable = draggable
    }
  }
})