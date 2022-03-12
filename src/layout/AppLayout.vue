<template>
  <el-container direction="vertical" class="app-layout">
    <app-layout-header :user="user" />
    <el-container class="app-layout__content-container">
      <div id="teleport-aside" />

      <el-container direction="vertical">
        <app-layout-filter />

        <el-main class="app-layout__main">
          <el-scrollbar>
            <router-view />
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup="props">
  import type User from '@/models/user.model'
  import AppLayoutHeader from '@/layout/AppLayoutHeader.vue'
  import AppLayoutFilter from '@/layout/AppLayoutFilter.vue'

  defineProps<{
    user?: User
  }>()
</script>

<style lang="pcss">
  .app-layout {
    height: 100%;

    &__content-container {
      height: calc(100% - 60px);
    }
    &__main {
      --el-main-padding: 0px;
    }
  }
</style>
