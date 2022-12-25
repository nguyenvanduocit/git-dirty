<script setup lang="ts">
import {NavSidebar, AppMenuBar} from '@aiocean/shell'
import {setMenus} from "@aiocean/shell/src/sidebar/store";
setMenus([
  {
    id: 'definition',
    name: 'Projects',
    icon: 'fe fe-globe',
    routePath: '/projects',
  }
])
</script>

<template>
  <NavSidebar/>
  <div class="main-content d-flex flex-column vh-100 vw-100 flex-grow-1 overflow-hidden">
    <AppMenuBar>
      <RouterView name="menuBar"/>
    </AppMenuBar>
    <div class="overflow-auto h-100 w-100">
      <RouterView/>
    </div>
  </div>
</template>
