<template>
  <el-header class="app-layout-header">
    {{ user?.username }}
  </el-header>
</template>

<script lang="ts" setup>
  import type User from '@/models/user.model'

  defineProps<{
    user?: User
  }>()
</script>

<style lang="postcss">
  .app-layout-header {
    background-color: var(--color-primary);
    color: #fff;
  }
</style>
