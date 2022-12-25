<template>
  <div class="card">
    <div class="card-body">
      {{folder}}
    </div>
  </div>
</template>

<script setup lang="ts">
import {invoke} from "@tauri-apps/api";
import {onMounted, onUpdated, ref} from "vue";
import {useStore} from "../composables/useStore";

const props = defineProps({
  id: {
    type: String,
    required: true
  },
})

const {getProject} = useStore()
const folder = ref<string | null>(null)

const loadFolder = async () => {
  const project = await getProject(props.id)
  folder.value = await invoke<string>("is_dirty", {dir: project.path});
}

onUpdated(loadFolder)
onMounted(loadFolder)

</script>

<style module lang="stylus">
</style>
