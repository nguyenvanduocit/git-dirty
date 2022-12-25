<template>
  <form class="form-inline me-4 d-flex w-auto flex-grow-1">
    <div class="input-group input-group-flush input-group-merge input-group-reverse" data-list="{&quot;valueNames&quot;: [&quot;name&quot;]}">

      <!-- Input -->
      <input type="search" class="form-control dropdown-toggle list-search show" data-bs-toggle="dropdown" placeholder="Search" aria-label="Search" aria-expanded="true">

      <!-- Prepend -->
      <div class="input-group-text">
        <i class="fe fe-search"></i>
      </div>

    </div>
  </form>
  <button class="btn btn-primary btn-sm" @click.prevent="addProject"><i class="fe fe-plus-circle"></i> Add Projects
  </button>
</template>

<script lang="ts" setup>
import {addProject} from "../composables/useAddProject";
</script>

<style lang="stylus" module>
</style>
