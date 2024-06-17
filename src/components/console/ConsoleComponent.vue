<script setup lang="ts">
import { ref } from 'vue'
import { useBuffer } from '@composables/buffer'
import { useFileBrowser } from '@composables/fileBrowser'
import Window from '@components/ui/Window.vue'
import { consoleProgram } from '@data/programs'

const { buffer, userInput, submitInput } = useBuffer()
const fileBrowser = useFileBrowser()
const { friendlyCurrentDir } = fileBrowser

const inputField = ref()

function focusInput() {
  inputField.value.focus()
}
</script>

<template>
  <window
    class="console"
    :program="consoleProgram"
    @click="focusInput"
  >
    <div class="window-content">
      <div
        v-for="(lineData, key) in buffer"
        :key="key"
        class="line"
      >
        <component
          :is="lineData.component"
          :lineData="lineData"
          :fileBrowser="fileBrowser"
        />
      </div>
      <div class="input-line">
        <span>
          <span class="green">oscar@system</span>
          :
          <span class="blue">{{ friendlyCurrentDir }}</span>
          $
        </span>
        <input
          v-model="userInput"
          type="text"
          v-on:keyup.enter="submitInput(friendlyCurrentDir)"
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
