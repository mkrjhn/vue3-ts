<template>
  <el-header class="app-layout-filter" id="teleport-filter">
    <div class="app-layout-filter__left" id="teleport-filter-left" />
    <div class="app-layout-filter__middle" id="teleport-filter-middle" />
    <div class="app-layout-filter__right" id="teleport-filter-right" />
  </el-header>
</template>

<style lang="postcss">
  .app-layout-filter {
    display: flex;
    align-items: center;

    &__left {
      margin-right: auto;
    }
  }
</style>
