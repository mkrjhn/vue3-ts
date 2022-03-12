<template>
  <app-layout
    :user="user"
  />
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import AppLayout from '@/layout/AppLayout.vue'
  import useMainStore from '@/stores/common'

  const store = useMainStore()
  const { user } = storeToRefs(store)

  store.getUser()
  store.getFilterCollection()
</script>
