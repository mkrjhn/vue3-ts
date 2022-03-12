<template>
  <el-card :header="data.name" :body-style="{ height: '200px' }" class="v-card" />
</template>

<script lang="ts" setup>
  import type { PropType } from 'vue'
  import type { Card } from '@/models/card.model'

  defineProps<{
    data: Card
  }>()
</script>
