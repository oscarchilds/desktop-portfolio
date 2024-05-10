<script setup>
import { onMounted } from 'vue'
import Console from '@components/console/ConsoleComponent.vue'
import { useDraggable } from '@composables/draggable.js'

const { Draggable } = useDraggable()

onMounted(() => {
  Draggable.create('#console', {
    trigger: '.header',
    bounds: '#desktop'
  })
})
</script>

<template>
  <div id="desktop">
    <Console id="console" />
  </div>
</template>

<style lang="scss" scoped>
#desktop {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
