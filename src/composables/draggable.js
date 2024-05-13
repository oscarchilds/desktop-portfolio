import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'

export function useDraggable() {
  gsap.registerPlugin(Draggable)

  function createDraggable(target) {
    return Draggable.create(target, {
      trigger: target.querySelector('.header'),
      bounds: '#desktop',
      zIndexBoost: false
    })
  }

  return { createDraggable }
}