<template>
  <h3 class="header-title">Help</h3>
  <button class="btn btn-primary btn-sm" @click.prevent="addProject"> <i class="fe fe-plus-circle"></i> Add Projects</button>
</template>

<script lang="ts" setup>
import {addProject} from "../composables/useAddProject";
</script>

<style lang="stylus" module>
</style>
