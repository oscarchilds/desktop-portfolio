<script setup>
import { ref } from 'vue'
import Window from '@components/ui/Window.vue'
import { fileBrowser as fileBrowserProgram } from '@data/programs'
import { useFileBrowser } from '@composables/fileBrowser.js'

const { currentDir, searchForDirectory, readDirForFileBrowser } =
  useFileBrowser()

var dirContent = ref([])
setDirContent()

const searchBar = ref(currentDir)

function doSearch() {
  const success = searchForDirectory(searchBar.value)

  if (success) setDirContent()
}

function setDirContent() {
  dirContent.value = readDirForFileBrowser(currentDir.value)
}
</script>

<template>
  <window
    class="console"
    :program="fileBrowserProgram"
  >
    <template v-slot:header>
      <div class="header-bar">
        <input
          type="text"
          v-model="searchBar"
          @keyup.enter="doSearch"
        />
      </div>
    </template>
    <div class="window-content">
      <span />
      <span>name</span>
      <span>size</span>
      <span>date modified</span>
      <template
        v-for="item in dirContent"
        :key="item.name"
      >
        <span />
        <span>{{ item.name }}</span>
        <span>{{ item.size }}</span>
        <span>{{ item.lastModified }}</span>
      </template>
    </div>
  </window>
</template>

<style lang="scss" scoped>
.header-bar {
  display: flex;
  width: 100%;

  input {
    background: #34363b;
    margin: 5px 10px;
    border-radius: 5px;
    color: white;
  }
}

.window-content {
  flex-grow: 1;
  display: grid;
  grid-template-columns: 30px 1fr 70px 150px;
  grid-template-rows: min-content;
  background: #262a33;
  height: fit-content;
}
</style>
