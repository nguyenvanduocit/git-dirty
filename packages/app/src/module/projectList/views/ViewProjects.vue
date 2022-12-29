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
    <button @click="quit">Quit</button>
  </div>
</template>

<script setup lang="ts">
import ProjectList from "../components/ProjectList.vue";
import {useUnListen} from "@aiocean/shell";
import {emit, listen} from "@tauri-apps/api/event";

useUnListen(async () => {
  return await listen("core::event", (event) => {
    console.log(event);
  })
})

const quit = () => {
  emit("frontend::event", "quit")
}
</script>

<style module lang="stylus">
</style>
