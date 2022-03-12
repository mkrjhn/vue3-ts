<template>
  <div class="v-card-group">
    <slot />
  </div>
</template>

<style lang="postcss">
  .v-card-group {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    padding: 10px;

    > .v-card {
      margin: 10px;
    }
  }
</style>
