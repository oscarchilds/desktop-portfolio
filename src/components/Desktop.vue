<script setup>
import { onMounted, watch, computed } from 'vue'
import { useDraggable } from '@composables/draggable.js'
import { useDesktopManagementStore } from '@stores/desktopManagement.js'
import Taskbar from '@components/taskbar/Taskbar.vue'
import { storeToRefs } from 'pinia'

const { createDraggable } = useDraggable()
const desktopManagement = useDesktopManagementStore()
const { windows } = storeToRefs(desktopManagement)
const windowsLength = computed(() => {
  return windows.value.length
})

onMounted(() => assignDraggables())
watch(windowsLength, () => assignDraggables())

function assignDraggables() {
  windows.value
    .filter((x) => !x.draggable)
    .forEach((x) => {
      setTimeout(() => {
        const el = document.getElementById(x.id)

        desktopManagement.setWindowDraggable(x.id, createDraggable(el))
      }, 100)
    })
}
</script>

<template>
  <div id="desktop">
    <component
      v-for="window in windows"
      :key="window.id"
      :is="window.program.component"
      :id="window.id"
      :class="{ focused: window.focused }"
      :style="{ 'z-index': window.focusOrder }"
      @focus="desktopManagement.focusWindow(window.id)"
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
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 100s ease infinite;
  height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
