<script setup>
import { programs } from '@data/programs.js'
import { useWindowManagementStore } from '@stores/windowManagement.js'

const windowManagement = useWindowManagementStore()
const emit = defineEmits(['close'])

function clickProgram(program) {
  windowManagement.openProgram(program)
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
@import '../../assets/colours.scss';

#start-menu {
  background-color: $darkpurple;
  height: 300px;
  width: 150px;
  display: flex;
  flex-direction: column;

  .program {
    height: 50px;
  }
}
</style>
