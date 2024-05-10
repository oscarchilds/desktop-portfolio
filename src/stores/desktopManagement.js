import { markRaw } from "vue";
import { defineStore } from "pinia";
import ConsoleComponent from "@components/console/ConsoleComponent.vue"

export const useDesktopManagementStore = defineStore('desktopManagment', {
  state: () => ({
    windows: [
      {
        id: 0,
        name: 'console',
        component: markRaw(ConsoleComponent),
        open: true,
        minimised: false
      }
    ]
  }),
  getters: {
    openWindows: (state) => state.windows.filter(x => x.open)
  },
  actions: {
    closeWindow(id) {
      const window = this.windows.find(x => x.id === id)

      if (!window) console.error(`Error closing window with ID ${id}`)

      window.open = false
    }
  }
})