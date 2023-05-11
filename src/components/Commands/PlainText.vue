<script setup lang="ts">
import type { LineItem } from '../../common/types'

defineProps<{
  lineItem: LineItem 
}>()
</script>

<template>
  <div>
    <span>{{ lineItem.userInput }}</span>
  </div>
</template>
