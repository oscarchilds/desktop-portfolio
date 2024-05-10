<script setup>
import { onMounted } from 'vue'
import { useDraggable } from '@composables/draggable.js'
import { useDesktopManagement } from '@composables/desktopManagement.js'

const { Draggable } = useDraggable()
const { openWindows, closeWindow } = useDesktopManagement()

onMounted(() => {
  Draggable.create('#console', {
    trigger: '.header',
    bounds: '#desktop'
  })
})
</script>

<template>
  <div id="desktop">
    <component
      v-for="(window, key) in openWindows"
      :key="key"
      :is="window.component"
      @close="closeWindow(window.id)"
    />
  </div>
</template>

<style lang="scss" scoped>
#desktop {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
