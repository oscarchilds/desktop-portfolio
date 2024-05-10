import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'

export function useDraggable() {
  gsap.registerPlugin(Draggable)

  return { Draggable }
}