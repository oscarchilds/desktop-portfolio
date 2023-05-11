<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import Commands from '../data/commands'
import PlainText from './Commands/PlainText.vue'
import UserInput from './Commands/UserInput.vue'
import type { LineItem } from '../common/types'

const buffer = shallowRef<LineItem[]>([
  {
    component: PlainText,
    userInput: 'welcome to the website'
  },
  {
    component: PlainText,
    userInput: 'Type help for a list of commands'
  }])

const userInput = ref<string>('')
const input = ref()

function submitInput() {
  const input = userInput.value
  userInput.value = ''

  buffer.value.push({
    component: UserInput,
    userInput: input
  })

  var command = Commands.find(x => x.name == input)

  if (!command) {
    buffer.value.push({
      component: PlainText,
      userInput: `${input}: command not found`
    })

    return
  }

  buffer.value.push({
    component: command.component
  })
}

function focusInput() {
  input.value.focus()
}

defineExpose({focusInput})
</script>

<template>
  <div class="console">
    <div v-for="(lineItem, key) in buffer" :key="key" class="item">
      <component :is="lineItem.component" :lineItem="lineItem"/>
    </div>
    <div class="input-line">
      <span><span class="green">user@system</span>:<span class="blue">~</span>$ </span><input v-model="userInput" type="text" v-on:keyup.enter="submitInput" ref="input">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/colours.scss';

.input-line {
  display: flex;
  white-space: pre;
}

.green {
  color: $green;
}

.blue {
  color: $blue;
}
</style>
