<template>
  <div class="card">
    <div class="card-body p-2">
      <div class="list-group">
        <ProjectListItem
            v-for="project in projects"
            :key="project"
            :project="project"
        />
        <AppEmpty v-if="isEmpty" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useStore} from "../composables/useStore";
import ProjectListItem from "./ProjectListItem.vue";
import { AppEmpty } from '@aiocean/shell'
import {computed} from "vue";

const {projects} = useStore()

const isEmpty = computed(() => Object.keys(projects.value).length === 0)

</script>

