<template>
  <el-menu
    :collapse="isCollapsed"
    class="app-layout-side-menu"
    router
    unique-opened
  >
    <div @click="isCollapsed = !isCollapsed" class="app-layout-side-menu__trigger">
      <el-icon>
        <component :is="isCollapsed ? IconArrowRightBold : IconArrowLeftBold" />
      </el-icon>
    </div>
    <el-menu-item
      v-for="cat in categories"
      :route="{ name: 'groups', params: { groupId: cat.ind_category_id} }"
      :index="cat.ind_category_name"
      :key="cat.ind_category_id"
    >
      <el-icon><icon-aim /></el-icon>
      <template #title>
        {{ cat.ind_category_name }}
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import {
    Aim as IconAim,
    ArrowLeftBold as IconArrowLeftBold,
    ArrowRightBold as IconArrowRightBold
  } from '@element-plus/icons-vue'
  import type Category from '@/models/category.model'

  const props = defineProps<{
    categories: Category[]
  }>()

  const isCollapsed = ref(false)
</script>

<style lang="postcss">
  .app-layout-side-menu {
    width: 260px;
    height: 100%;
    overflow: auto;

    &.el-menu--collapse {
      width: 60px;
    }

    &__trigger {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      background-color: #ccc;
      cursor: pointer;
    }
  }
</style>
