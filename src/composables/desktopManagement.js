import { ref, computed, markRaw } from "vue"
import ConsoleComponent from "@components/console/ConsoleComponent.vue"

export function useDesktopManagement() {
  const windows = ref([
    {
      id: 0,
      component: markRaw(ConsoleComponent),
      open: true,
      minimised: false
    }
  ])

  const openWindows = computed(() => {
    return windows.value.filter(x => x.open)
  })

  function closeWindow(id) {
    const window = windows.value.find(x => x.id === id)

    if (!window) console.error(`Error closing window with ID ${id}`)

    window.open = false
  }

  return { openWindows, closeWindow }
}