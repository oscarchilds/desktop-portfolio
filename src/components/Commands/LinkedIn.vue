<script setup>
import { ref, onMounted } from 'vue'
const url = ref('https://linkedin.com/in/oscar-childs-4b5843146/')

onMounted(() => {
  window.open(url.value, '_blank')
})
</script>

<template>
  <div class="column">
    <span>Opening <a :href="url.value">my linkedin</a> in a new tab</span>
  </div>
</template>
