<script setup>
import { useFileSystem } from '@composables/fileSystem'

const props = defineProps({
  fileBrowser: Object
})

const { readDir } = useFileSystem()

const dirContents = readDir(props.fileBrowser.currentDir.value)
</script>

<template>
  <div
    v-for="(value, key) in dirContents"
    :key="key"
  >
    <span>
      {{ value }}
    </span>
  </div>
</template>
