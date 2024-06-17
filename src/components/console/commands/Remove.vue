<script setup lang="ts">
import { useFileSystem } from '@composables/fileSystem'

const props = defineProps({
  lineData: Object,
  fileBrowser: Object
})

const currentDir = props.fileBrowser.currentDir
const { remove } = useFileSystem()

remove(`${currentDir.value}/${props.lineData.commandArguments}`)
</script>
