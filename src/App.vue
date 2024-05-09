<script setup>
import { onMounted, ref } from 'vue'
import Console from './components/ConsoleComponent.vue'

const consoleRef = ref()

function clickAnywhere() {
  consoleRef.value.focusInput()
}

onMounted(() => {
  clickAnywhere()
})
</script>

<template>
  <div
    class="container"
    @click="clickAnywhere"
  >
    <Console ref="consoleRef" />
  </div>
</template>

<style lang="scss">
#app {
  height: 100%;

  .container {
    padding: 10px;
    height: calc(100% - 20px);
  }
}
</style>
