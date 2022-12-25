<template>
  <div class="card">
    <div class="card-header">
      <div class="row align-items-center">
        <div class="col">
          <form>
            <div class="input-group input-group-flush input-group-merge input-group-reverse">
              <input class="form-control list-search" type="search" placeholder="Search">
              <span class="input-group-text"><i class="fe fe-search"></i></span>
            </div>
          </form>

        </div>
      </div>
    </div>
    <div class="card-body p-2">
      <div class="list-group">
        <ProjectListItem
            v-for="project in projects"
            :key="project"
            :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useStore} from "../composables/useStore";
import ProjectListItem from "./ProjectListItem.vue";

const {projects} = useStore()

</script>

