<script setup lang="ts">
import type Program from 'types/program'

const props = defineProps<{
  program: Program
}>()

const programIcon = props.program.icon
const title = props.program.name
</script>

<template>
  <div
    class="window"
    @pointerdown="$emit('focus')"
  >
    <div class="header">
      <div class="top-row">
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
      <slot name="header" />
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.window {
  position: absolute;
  min-width: 400px;
  min-height: 200px;
  width: 500px;
  height: 300px;
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
    width: 100%;
    background-color: #23262e;
    color: white;

    .top-row {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 20px;

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
          justify-content: center;
          width: 22px;
          padding: 0 1px;
          height: 100%;

          &:hover {
            background: #65676c;
          }

          &:last-child:hover {
            background: red;
          }
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
