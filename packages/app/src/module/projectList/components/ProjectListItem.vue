<template>
  <RouterLink
      :to="`/projects/${project.id}`"
      class="list-group-item p-3 list-group-item-action d-flex justify-content-between align-items-center"
      active-class="active"
  >
    {{ shortName }}

    <span v-if="isDirty" class="badge bg-danger">Dirty</span>
  </RouterLink>
</template>
<script lang="ts" setup>
import {computed, onMounted, onUpdated, PropType, ref} from "vue";
import {useStore} from "../composables/useStore";
import {invoke} from "@tauri-apps/api";

const props = defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true
  }
})

const shortName = computed(() => {
  // last most 2 parts of the name
  const parts = props.project.path.split('/');
  return parts.slice(parts.length - 2).join('/');
})

const {getProject} = useStore()
const isDirty = ref<string | null>(null)

const checkDirty = async () => {
  const project = await getProject(props.project.id)
  isDirty.value = await invoke<string>("is_dirty", {dir: project.path});
}

onMounted(checkDirty)

</script>
