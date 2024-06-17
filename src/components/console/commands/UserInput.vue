<script setup lang="ts">
defineProps({
  lineData: Object
})
</script>

<template>
  <div>
    <span>
      <span class="green">oscar@system</span>
      :
      <span class="blue">{{ lineData.dir }}</span>
      $ {{ lineData.text }}
    </span>
  </div>
</template>
