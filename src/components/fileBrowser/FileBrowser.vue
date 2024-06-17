<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import Window from '@components/ui/Window.vue'
import { fileBrowser as fileBrowserProgram } from '@data/programs'
import { useFileBrowser } from '@composables/fileBrowser.js'
import { useFileSystem } from '@composables/fileSystem.js'
import { useWindowManagementStore } from '@stores/windowManagement'
import FileBrowserItem from 'types/fileBrowserItem'
import FileBrowserFile from 'types/fileBrowserFile'

const {
  currentDir,
  searchForDirectory,
  readDirForFileBrowser,
  goUpOneDir: goUpOneDirFileBrowser,
  goToDir
} = useFileBrowser()
const { openProgram } = useWindowManagementStore()
const { makeDir, remove, rename } = useFileSystem()

const dirContent: Ref<FileBrowserItem[]> = ref([])
const searchBar = ref('')
const renameText = ref('')
reload()

const selectedItem = computed(() => {
  return dirContent.value.find((x) => x.selected)
})

const anySelected = computed(() => {
  return !!selectedItem.value
})

function doSearch() {
  searchForDirectory(searchBar.value)
  reload()
}

function goUpOneDir() {
  goUpOneDirFileBrowser()
  reload()
}

function open(item: FileBrowserItem) {
  if (item.isDirectory) {
    goToDir(item.name)
    reload()
  } else {
    var file = item as FileBrowserFile
    openProgram(file.program, file.fullPath)
  }
}

function createFolder() {
  makeDir(`${currentDir.value}/new folder`)
  reload()
}

function clickItem(item: FileBrowserItem) {
  if (item.selected) return

  unselectAll()
  item.selected = true
}

function unselectAll() {
  dirContent.value.forEach((x) => {
    x.selected = false
    x.renaming = false
  })
}

function deleteSelected() {
  if (!selectedItem.value) throw 'Selected Item not found'

  remove(selectedItem.value.fullPath)
  reload()
}

function startRename() {
  if (!selectedItem.value) throw 'Selected Item not found'

  renameText.value = selectedItem.value.name
  selectedItem.value.renaming = true
}

function endRename(item: FileBrowserItem) {
  if (!item.renaming) {
    reload()
    return
  }

  const oldFile = `${currentDir.value}/${item.name}`
  const newFile = `${currentDir.value}/${renameText.value}`
  console.log(oldFile)
  console.log(newFile)

  rename(oldFile, newFile)
  reload()
}

function reload() {
  unselectAll()
  dirContent.value = readDirForFileBrowser(currentDir.value)
  searchBar.value = currentDir.value
}
</script>

<template>
  <window
    class="console"
    :program="fileBrowserProgram"
  >
    <template v-slot:header>
      <div class="header-bar">
        <div class="icon-button">
          <font-awesome-icon
            title="Go up a directory"
            icon="up-long"
            @click="goUpOneDir"
          />
        </div>
        <input
          type="text"
          v-model="searchBar"
          @keyup.enter="doSearch"
        />
      </div>
      <div class="header-bar icon-bar">
        <div class="icon-button">
          <font-awesome-icon
            title="Refresh"
            icon="arrows-rotate"
            @click="reload"
          />
        </div>
        <div class="icon-button">
          <font-awesome-icon
            title="Create Folder"
            icon="folder-plus"
            @click="createFolder"
          />
        </div>
        <div class="icon-button">
          <font-awesome-icon
            title="Rename Item"
            icon="pen"
            :class="{ disabled: !anySelected || selectedItem?.isDirectory }"
            @click="startRename"
          />
        </div>
        <div class="icon-button">
          <font-awesome-icon
            title="Delete Item"
            icon="trash"
            :class="{ disabled: !anySelected }"
            @click="deleteSelected"
          />
        </div>
      </div>
    </template>
    <div
      class="window-content"
      @click="unselectAll"
    >
      <div class="header-row">
        <div />
        <div>name</div>
        <div>size</div>
        <div>date modified</div>
      </div>
      <div
        v-for="item in dirContent"
        :key="item.name"
        class="row"
        :class="{ selected: item.selected }"
        @click.stop="clickItem(item)"
        @dblclick="open(item)"
      >
        <div>
          <font-awesome-icon :icon="item.icon" />
        </div>
        <div v-if="item.renaming">
          <input
            v-model="renameText"
            type="text"
            @keyup.enter="endRename(item)"
          />
        </div>
        <div v-if="!item.renaming">{{ item.name }}</div>
        <div>{{ item.size }}</div>
        <div>{{ item.lastModified }}</div>
      </div>
    </div>
  </window>
</template>

<style lang="scss" scoped>
.header-bar {
  width: 100%;
  display: flex;
  align-items: center;
  height: 25px;

  .icon-button {
    margin: 0 5px;
    cursor: pointer;
    width: 25px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 5px;

    &:hover {
      background: #383b42;
    }

    &.disabled {
      pointer-events: none;
      cursor: default;
      opacity: 0.3;
    }
  }

  input {
    background: #34363b;
    margin: 0 10px 0 0;
    padding: 0 8px;
    border-radius: 5px;
    color: white;
  }
}

.window-content {
  flex-grow: 1;
  background: #262a33;
  height: fit-content;
  display: flex;
  flex-direction: column;
  color: white;

  .header-row,
  .row {
    display: flex;

    > :first-child {
      width: 40px;
      display: flex;
      justify-content: center;
    }

    > :nth-child(2) {
      flex-grow: 1;
      flex-shrink: 1;
    }

    > :nth-child(3) {
      min-width: 50px;
    }

    > :last-child {
      width: 150px;
    }
  }

  .row {
    &:hover {
      background: #65676c;
      cursor: pointer;
    }

    &.selected {
      background: #383b42;
    }

    div {
      user-select: none;
      flex-shrink: 0;

      input {
        background-color: white;
        color: black;
        caret-color: black;
        flex: 1;
      }
    }
  }
}
</style>
