<script setup>
const props = defineProps(['program'])

const programIcon = props.program.icon
const title = props.program.name
</script>

<template>
  <div
    class="window"
    @pointerdown="$emit('focus')"
  >
    <div class="header">
      <font-awesome-icon
        class="window-icon"
        :icon="programIcon"
      />
      <span>{{ title }}</span>
      <div class="buttons">
        <div @pointerdown.stop="$emit('minimise')">
          <font-awesome-icon icon="window-minimize" />
        </div>
        <div @pointerdown="$emit('fullscreen')">
          <font-awesome-icon icon="expand" />
        </div>
        <div @pointerdown="$emit('close')">
          <font-awesome-icon icon="x" />
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
    align-items: center;

    .window-icon {
      position: absolute;
      left: 5px;
    }

    span {
      font-size: 14px;
      color: black;
    }

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
