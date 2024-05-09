<script setup>
import { ref, onMounted } from 'vue'
const url = ref('https://github.com/oscarchilds')

onMounted(() => {
  window.open(url.value, '_blank')
})
</script>

<template>
  <div class="column">
    <span>Opening <a :href="url.value">my github</a> in a new tab</span>
  </div>
</template>
