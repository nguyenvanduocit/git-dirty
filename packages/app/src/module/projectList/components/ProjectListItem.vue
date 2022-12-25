<template>
  <RouterLink
      :to="`/projects/${project.id}`"
      class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      active-class="active"
  >
    {{ shortName }}
  </RouterLink>
</template>
<script lang="ts" setup>
import {computed, PropType} from "vue";

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

</script>
