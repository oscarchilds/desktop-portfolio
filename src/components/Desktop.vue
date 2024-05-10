<script setup>
import { onMounted } from 'vue'
import { useDraggable } from '@composables/draggable.js'
import { useDesktopManagementStore } from '@stores/desktopManagement.js'
import Taskbar from '@components/taskbar/Taskbar.vue'

const { Draggable } = useDraggable()
const desktopManagement = useDesktopManagementStore()

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
      v-for="(window, key) in desktopManagement.openWindows"
      :key="key"
      :is="window.component"
      @close="desktopManagement.closeWindow(window.id)"
    />
    <taskbar />
  </div>
</template>

<style lang="scss" scoped>
#desktop {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
