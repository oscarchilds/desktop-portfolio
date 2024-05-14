<script setup>
import Window from '@components/ui/Window.vue'
import { notepad } from '@data/programs'
</script>

<template>
  <window
    class="console"
    :program="notepad"
  >
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
