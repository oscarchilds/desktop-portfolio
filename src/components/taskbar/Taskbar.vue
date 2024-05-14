<script setup>
import { ref } from 'vue'
import StartMenu from './StartMenu.vue'
import { useWindowManagementStore } from '@stores/windowManagement.js'

const windowManagement = useWindowManagementStore()

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
      @click="showStartMenu = !showStartMenu"
    >
      start
    </button>
    <div
      v-for="(window, key) in windowManagement.windows"
      :key="key"
      class="window"
      :class="{ focused: window.focused }"
      @click="windowManagement.focusWindow(window.id)"
    >
      {{ window.program.name }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/colours.scss';

#taskbar {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: $darkpurple;
  display: flex;
  gap: 5px;
  z-index: 1000;

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
    background-color: #383B42;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    &.focused {
      background-color: #4E5157;
    }

    &:hover {
      background-color: #65676C;
    }
  }
}
</style>
