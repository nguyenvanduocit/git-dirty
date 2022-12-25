<template>
  <div class="container-fluid p-3">
    <div class="row row-cols-2">
      <div class="col-auto">
        <ProjectList/>
      </div>
      <div class="col-auto">
        <RouterView/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectList from "../components/ProjectList.vue";

</script>

<style module lang="stylus">
</style>
