<script setup>
const props = defineProps({
  lineData: Object,
  fileBrowser: Object
})

props.fileBrowser.changeDirectory(props.lineData.commandArguments)
</script>
