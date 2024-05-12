<script setup>
import { ref } from 'vue'
import { useBuffer } from '@composables/buffer.js'
import Window from '@components/ui/Window.vue'

const { buffer, userInput, submitInput } = useBuffer()

const inputField = ref()

function focusInput() {
  inputField.value.focus()
}

defineExpose({ focusInput })
</script>

<template>
  <window class="console">
    <template #title>console</template>
    <div class="window-content">
      <div
        v-for="(lineData, key) in buffer"
        :key="key"
        class="line"
      >
        <component
          :is="lineData.component"
          :lineData="lineData"
        />
      </div>
      <div class="input-line">
        <span>
          <span class="green">user@system</span>
          :
          <span class="blue">~</span>
          $
        </span>
        <input
          v-model="userInput"
          type="text"
          v-on:keyup.enter="submitInput"
          ref="inputField"
        />
      </div>
    </div>
  </window>
</template>

<style lang="scss" scoped>
@import '../../assets/colours.scss';

.window-content {
  padding: 10px;
  background-color: $darkpurple;
  flex-grow: 1;

  .input-line {
    display: flex;
    white-space: pre;
  }
}
</style>
