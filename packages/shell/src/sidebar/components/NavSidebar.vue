<template>
  <nav data-tauri-drag-region :class="$style.sidebar" class="pt-2 pb-2 d-flex flex-column">
    <NavSidebarMenu :menus="menus"/>
    <div class="mt-auto" data-tauri-drag-region></div>
    <NavSidebarMenu :menus="bottomMenus"/>
  </nav>

</template>

<script lang="ts" setup>
import NavSidebarMenu from "./NavSidebarMenu.vue";
import {menus, bottomMenus} from "../store";

</script>

<style lang="stylus" module>
.sidebar
  border-right 1px solid #E3EBF6
  background white
  flex-shrink 0
  flex-grow 0
  user-select: none;
  width 50px
  :global(.navbar-nav)
    display flex
    flex-direction column
</style>
