<script setup>
defineProps({
  lineData: Object
})
</script>

<template>
  <div>
    <span>
      <span class="green">user@system</span>
      :
      <span class="blue">~</span>
      $ {{ lineData.text }}
    </span>
  </div>
</template>
