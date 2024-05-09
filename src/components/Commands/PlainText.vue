<script setup>
defineProps({
  lineItem: Object
})
</script>

<template>
  <div>
    <span>{{ lineItem.userInput }}</span>
  </div>
</template>
