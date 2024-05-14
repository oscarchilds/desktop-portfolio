<script setup>
// TODO: port to library method
// https://docs.fontawesome.com/web/use-with/vue/add-icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faX, faExpand, faWindowMinimize } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div
    class="window"
    @pointerdown="$emit('focus')"
  >
    <div class="header">
      <slot name="title" />
      <div class="buttons">
        <div @pointerdown.stop="$emit('minimise')">
          <FontAwesomeIcon :icon="faWindowMinimize" />
        </div>
        <div @pointerdown="$emit('fullscreen')">
          <FontAwesomeIcon :icon="faExpand" />
        </div>
        <div @pointerdown="$emit('close')">
          <FontAwesomeIcon :icon="faX" />
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.window {
  position: absolute;
  min-width: 400px;
  min-height: 200px;
  border: 1px solid white;
  resize: both;
  overflow: auto;
  top: 30px;
  left: 30px;
  background-color: black;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  .header {
    height: 20px;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;

    .buttons {
      position: absolute;
      right: 5px;
      display: flex;
      gap: 7px;
      height: 20px;
      align-items: center;

      div {
        cursor: pointer;
        display: flex;
        align-items: center;
        width: 13px;
        height: 13px;

        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  &:not(.focused) {
    border: 1px solid gray;

    .header {
      background-color: gray;
    }
  }
}
</style>
