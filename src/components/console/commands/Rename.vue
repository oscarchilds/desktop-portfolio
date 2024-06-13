<script setup>
import { ref } from 'vue'
import { useFileSystem } from '@composables/fileSystem'

const props = defineProps({
  lineData: Object,
  fileBrowser: Object
})

const currentDir = props.fileBrowser.currentDir
const { rename } = useFileSystem()

const error = ref('')

const oldFileName = props.lineData.commandArguments[0]
const newFileName = props.lineData.commandArguments[1]

const oldFile = `${currentDir.value}/${oldFileName}`
const newFile = `${currentDir.value}/${newFileName}`

if (!oldFileName || !newFileName) {
  error.value = 'invalid arguments'
} else {
  rename(oldFile, newFile)
}
</script>

<template>
  <div>
    <span>{{ error }}</span>
  </div>
</template>
