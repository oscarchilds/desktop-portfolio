<template>
  <div
    class="window"
    @pointerdown="$emit('focus')"
  >
    <div class="header">
      <slot name="title" />
      <div class="buttons">
        <button @pointerdown.stop="$emit('minimise')">min</button>
        <button @pointerdown="$emit('fullscreen')">fullscreen</button>
        <button @pointerdown="$emit('close')">close</button>
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
      right: 0px;
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
