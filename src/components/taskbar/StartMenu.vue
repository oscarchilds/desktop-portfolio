<script setup>
import { programs } from '@data/programs.js'
import { useDesktopManagementStore } from '@stores/desktopManagement.js'

const desktopManagement = useDesktopManagementStore()
const emit = defineEmits(['close'])

function clickProgram(program) {
  desktopManagement.openProgram(program)
  emit('close')
}
</script>

<template>
  <div id="start-menu">
    <span>programs</span>
    <button
      v-for="program in programs"
      :key="program.name"
      class="program"
      @click="clickProgram(program)"
    >
      {{ program.name }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
#start-menu {
  background-color: teal;
  height: 300px;
  width: 150px;
  display: flex;
  flex-direction: column;

  .program {
    height: 50px;
  }
}
</style>
