import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { useDesktopManagementStore } from '@stores/desktopManagement'

export function useDraggable() {
  gsap.registerPlugin(Draggable)

  const desktopManagement = useDesktopManagementStore()

  function createDraggable(target) {
    return Draggable.create(target, {
      trigger: target.querySelector('.header'),
      bounds: '#desktop',
      zIndexBoost: false,
      onPress: () => desktopManagement.focusWindow(target.id)
    })
  }

  return { createDraggable }
}