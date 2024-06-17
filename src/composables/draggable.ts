import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'

export function useDraggable() {
  gsap.registerPlugin(Draggable)

  function createDraggable(target: HTMLElement): GSAPDraggableVars {
    return Draggable.create(target, {
      trigger: target.querySelector('.top-row'),
      bounds: '#desktop',
      zIndexBoost: false
    })
  }

  return { createDraggable }
}