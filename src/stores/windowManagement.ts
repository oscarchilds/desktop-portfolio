import { defineStore } from "pinia"
import { fileBrowser } from "../data/programs.js"
import DesktopWindow from "types/desktopWindow"
import Program from "types/program.ts"

export const useWindowManagementStore = defineStore('windowManagment', {
  state: () => ({
    windows: [
      {
        id: `id-${self.crypto.randomUUID()}`,
        program: fileBrowser,
        minimised: false,
        focused: true,
        focusOrder: 0
      }
    ] as DesktopWindow[]
  }),
  actions: {
    closeWindow(id: string) {
      const windowToClose = this.windows.find(x => x.id == id) as DesktopWindow
      const otherWindows = this.windows.filter(x => x.id != id) as DesktopWindow[]

      if (windowToClose.focused && this.windows.length > 1) {
        const focusOrderToFind = windowToClose.focusOrder - 1
        const nextWindowToFocus = this.windows.find(x => x.focusOrder == focusOrderToFind) as DesktopWindow

        if (!nextWindowToFocus.minimised) nextWindowToFocus.focused = true
      }

      otherWindows
        .filter(x => x.focusOrder > windowToClose.focusOrder)
        .forEach(x => x.focusOrder--)

      this.windows = this.windows.filter(x => x.id != id)
    },
    openProgram(program: Program, filePath: string | null = null) {
      this.windows.forEach(x => x.focused = false)

      this.windows.push({
        id: `id-${self.crypto.randomUUID()}`,
        program: program,
        minimised: false,
        focused: true,
        focusOrder: this.windows.length,
        filePath: filePath
      } as DesktopWindow )
    },
    setWindowDraggable(id: string, draggable: GSAPDraggableVars) {
      var window = this.windows.find(x => x.id === id) as DesktopWindow

      if (!window) console.error(`Error setting window as draggable with ID ${id}`)

      window.draggable = draggable
    },
    focusWindow(id: string) {
      const windowToFocus = this.windows.find(x => x.id == id) as DesktopWindow
      const otherWindows = this.windows.filter(x => x.id != id) as DesktopWindow[]

      otherWindows.forEach(x => {
        x.focused = false

        if (x.focusOrder > windowToFocus.focusOrder) {
          x.focusOrder--
        }
      })

      windowToFocus.focused = true
      windowToFocus.focusOrder = this.windows.length - 1
      windowToFocus.minimised = false
    },
    hideWindow(id: string) {
      const windowToHide = this.windows.find(x => x.id == id) as DesktopWindow
      const otherWindows = this.windows.filter(x => x.id != id) as DesktopWindow[]

      if (otherWindows.length) {
        otherWindows
          .filter(x => x.focusOrder < windowToHide.focusOrder)
          .forEach(x => x.focusOrder++)

        const windowToFocus = otherWindows.find(x => x.focusOrder == this.windows.length - 1) as DesktopWindow

        if (!windowToFocus.minimised) windowToFocus.focused = true
      }

      windowToHide.focused = false
      windowToHide.focusOrder = 0
      windowToHide.minimised = true
    }
  }
})