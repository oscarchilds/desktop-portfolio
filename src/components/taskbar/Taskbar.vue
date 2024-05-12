<script setup>
import { ref } from 'vue'
import StartMenu from './StartMenu.vue'
import { useDesktopManagementStore } from '@stores/desktopManagement.js'

const desktopManagement = useDesktopManagementStore()

const showStartMenu = ref(false)
</script>

<template>
  <div id="taskbar">
    <StartMenu
      v-if="showStartMenu"
      @close="showStartMenu = false"
    />
    <button
      id="start-button"
      @click="showStartMenu = true"
    >
      start
    </button>
    <div
      v-for="(window, key) in desktopManagement.windows"
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
  display: flex;
  gap: 5px;

  #start-menu {
    position: absolute;
    left: 0;
    bottom: 50px;
  }

  #start-button {
    width: 150px;
  }

  .window {
    width: 200px;
    height: 100%;
    background-color: white;
  }
}
</style>
