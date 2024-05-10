<script setup>
defineProps({
  lineData: Object
})
</script>

<template>
  <div>
    <span>{{ lineData.text }}</span>
  </div>
</template>
