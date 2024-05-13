<script setup>
import Window from '@components/ui/Window.vue'
</script>

<template>
  <window class="console">
    <template #title>notepad</template>
    <div class="window-content">
      <textarea />
    </div>
  </window>
</template>

<style lang="scss" scoped>
@import '../../assets/colours.scss';

.window-content {
  flex-grow: 1;
  display: flex;

  textarea {
    width: 100%;
    font-size: 16px;
  }
}
</style>
