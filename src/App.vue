<script setup lang="ts">
import {NavSidebar, AppMenuBar} from '@aiocean/shell'
</script>

<template>
  <AppMenuBar>
    <RouterView name="menuBar"/>
  </AppMenuBar>
  <div class="main-content d-flex flex-row vh-100 vw-100 flex-grow-1 overflow-hidden">
    <NavSidebar/>
    <div class="overflow-auto h-100 w-100">
      <RouterView/>
    </div>
  </div>
</template>
