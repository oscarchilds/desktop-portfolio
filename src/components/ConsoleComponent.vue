<script setup>
import { ref } from 'vue'
import { useBuffer } from '../composables/buffer.js'

const { buffer, userInput, submitInput } = useBuffer()

const inputField = ref()

function focusInput() {
  inputField.value.focus()
}

defineExpose({ focusInput })
</script>

<template>
  <div class="console">
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
</template>

<style lang="scss" scoped>
.input-line {
  display: flex;
  white-space: pre;
}
</style>
