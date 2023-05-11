<script setup lang="ts">
import { ref } from 'vue'
import Console from './components/ConsoleComponent.vue'

const consoleRef = ref()

const clickAnywhere = function() {
  consoleRef.value.focusInput()
}
</script>

<template>
  <div class="container" @click="clickAnywhere">
    <Console ref="consoleRef" />
  </div>
</template>

<style lang="scss">
#app {
  height: 100%;

  .container {
    padding: 2%;
    width: 96%;
    height: 96%;
  }
}
</style>
