<script setup lang="ts">
import type { LineItem } from '../../common/types'

defineProps<{
  lineItem: LineItem 
}>()
</script>

<template>
  <div>
    <span><span class="green">user@system</span>:<span class="blue">~</span>$ {{ lineItem.userInput }}</span>
  </div>
</template>