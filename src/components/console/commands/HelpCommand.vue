<script setup>
import commands from '@data/commands'
</script>

<template>
  <div class="column">
    <span
      v-for="(command, key) in commands"
      :key="key"
    >
      {{ command.name }} - {{ command.description }}
    </span>
  </div>
</template>
