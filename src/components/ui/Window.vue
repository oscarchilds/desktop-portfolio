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
  border: 1px solid #999999;
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
    background-color: #23262e;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    .window-icon {
      position: absolute;
      left: 5px;
    }

    span {
      font-size: 14px;
    }

    .buttons {
      position: absolute;
      right: 1px;
      display: flex;
      height: 20px;
      align-items: center;

      div {
        cursor: pointer;
        display: flex;
        align-items: center;
        width: 20px;
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
