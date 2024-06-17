<script setup lang="ts">
defineProps({
  lineData: Object
})
</script>

<template>
  <div>
    <span>{{ lineData.text }}</span>
  </div>
</template>
