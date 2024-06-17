<script setup lang="ts">
import Program from 'types/program'
import { programs } from '@data/programs'
import { useWindowManagementStore } from '@stores/windowManagement'

const windowManagement = useWindowManagementStore()
const emit = defineEmits(['close'])

function clickProgram(program: Program) {
  windowManagement.openProgram(program)
  emit('close')
}

document.onclick = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  const clickedStart = ['start-button', 'start-menu'].includes(target.id)

  if (!clickedStart) emit('close')
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
      <font-awesome-icon
        :icon="program.icon"
        size="xl"
      />
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
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
