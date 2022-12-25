<template>
  <div class="container-fluid p-3">
    <div class="row">
      <div class="col-5">
        <ProjectList/>
      </div>
      <div class="col-7">
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
