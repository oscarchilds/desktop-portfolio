<script setup lang="ts">
import { useFileSystem } from '@composables/fileSystem'

const props = defineProps({
  lineData: Object,
  fileBrowser: Object
})

const currentDir = props.fileBrowser.currentDir
const { makeDir } = useFileSystem()

makeDir(`${currentDir.value}/${props.lineData.commandArguments}`)
</script>
