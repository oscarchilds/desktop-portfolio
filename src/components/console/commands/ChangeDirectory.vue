<script setup lang="ts">
const props = defineProps({
  lineData: Object,
  fileBrowser: Object
})

props.fileBrowser.changeDirectory(props.lineData.commandArguments)
</script>
