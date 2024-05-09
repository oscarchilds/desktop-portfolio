<script setup>
defineProps({
  lineItem: Object
})
</script>

<template>
  <div>
    <span>
      <span class="green">user@system</span>
      :
      <span class="blue">~</span>
      $ {{ lineItem.userInput }}
    </span>
  </div>
</template>
