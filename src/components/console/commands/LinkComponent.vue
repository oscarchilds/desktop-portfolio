<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  lineData: Object
})

onMounted(() => {
  window.open(props.lineData.url, '_blank')
})
</script>

<template>
  <div class="column">
    <span>
      Opening
      <a
        :href="lineData.url"
        target="_blank"
      >
        {{ lineData.text }}
      </a>
      in a new tab
    </span>
  </div>
</template>
