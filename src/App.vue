<script setup lang="ts">
import Desktop from '@components/Desktop.vue'
import { useFileSystem } from '@composables/fileSystem'

const { initialiseFileSystem } = useFileSystem()
initialiseFileSystem()
</script>

<template>
  <Desktop />
</template>

<style lang="scss">
#app {
  height: 100vh;
  width: 100vw;
}
</style>
