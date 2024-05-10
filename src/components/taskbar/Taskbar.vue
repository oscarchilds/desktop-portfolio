<script setup>
import { useDesktopManagementStore } from '@stores/desktopManagement.js'

const desktopManagement = useDesktopManagementStore()
</script>

<template>
  <div id="taskbar">
    <div
      v-for="(window, key) in desktopManagement.openWindows"
      :key="key"
      class="window"
    >
      {{ window.name }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
#taskbar {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: darkcyan;

  .window {
    width: 200px;
    height: 100%;
    background-color: white;
  }
}
</style>