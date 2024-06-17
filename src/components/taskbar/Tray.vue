<script setup lang="ts">
import { ref } from 'vue'
const time = ref('00:00')

function padValue(value: number) {
  return String(value).padStart(2, '0')
}

function setTime() {
  const now = new Date()
  const hours = padValue(now.getHours())
  const minutes = padValue(now.getMinutes())

  time.value = `${hours}:${minutes}`
}

setTime()
setInterval(setTime, 3000)

const now = new Date()
const day = padValue(now.getDate())
const month = padValue(now.getMonth() + 1)
const year = now.getFullYear()

const date = `${day}/${month}/${year}`
</script>

<template>
  <div id="tray">
    <span>{{ time }}</span>
    <span>{{ date }}</span>
  </div>
</template>

<style lang="scss" scoped>
#tray {
  position: absolute;
  right: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  font-size: 12px;
  gap: 3px;
}
</style>
