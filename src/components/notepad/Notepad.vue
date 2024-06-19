<script setup lang="ts">
import { ref } from 'vue'
import Window from '@components/ui/Window.vue'
import { notepad } from '@data/programs'
import { useFileSystem } from '@composables/fileSystem'

const { openFile } = useFileSystem()

const props = defineProps(['filePath'])

const text = ref('')

if (props.filePath) {
  const file = openFile(props.filePath)
  text.value = file
}
</script>

<template>
  <window
    class="console"
    :program="notepad"
  >
    <div class="window-content">
      <textarea v-model="text" />
    </div>
  </window>
</template>

<style lang="scss" scoped>
.window-content {
  flex-grow: 1;
  display: flex;

  textarea {
    width: 100%;
    font-size: 16px;
    resize: none;
  }
}
</style>
