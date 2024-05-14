<script setup>
import { ref } from 'vue'
import StartMenu from './StartMenu.vue'
import Tray from './Tray.vue'
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
    <div
      id="start-button"
      @click="showStartMenu = !showStartMenu"
    >
      start
    </div>
    <div
      v-for="(window, key) in windowManagement.windows"
      :key="key"
      class="window"
      :class="{ focused: window.focused }"
      @click="windowManagement.focusWindow(window.id)"
    >
      <font-awesome-icon
        :icon="window.program.icon"
        size="xl"
      />
      {{ window.program.name }}
    </div>
    <Tray />
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

  .window,
  #start-button {
    background-color: #383b42;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;

    &.focused {
      background-color: #4e5157;
    }

    &:hover {
      background-color: #65676c;
    }

    &.window {
      width: 200px;
      gap: 10px;

      svg {
        padding-left: 10px;
      }
    }
  }

  #start-menu {
    position: absolute;
    left: 0;
    bottom: 50px;
  }

  #start-button {
    width: 100px;
    justify-content: center;
  }
}
</style>
