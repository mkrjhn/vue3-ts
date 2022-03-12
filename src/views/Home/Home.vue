<template>
  <!-- <teleport to="#teleport-filter-left">
    <div>left</div>
  </teleport> -->

  <teleport to="#teleport-filter-right">
    <el-date-picker
      v-model="filter.period"
      type="date"
      format="DD.MM.YYYY"
      value-format="DD.MM.YYYY"
    />
  </teleport>

  <teleport to="#teleport-aside">
    <app-layout-aside
      v-if="categories?.length"
      :categories="categories"
    />
  </teleport>

  <v-card-group>
    <v-card
      v-for="card in cards"
      :data="card"
      :key="card.id"
    />
  </v-card-group>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia'
  import { onUnmounted, reactive, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { isNil } from 'lodash'
  import AppLayoutAside from '@/layout/AppLayoutAside.vue'
  import useMainStore from '@/stores/common'
  import useHomeStore from '@/stores/home'

  const mainStore = useMainStore()
  const { categories } = storeToRefs(mainStore)

  const homeStore = useHomeStore()
  const { cards } = storeToRefs(homeStore)

  mainStore.getCategoryList()
  homeStore.getCardList()

  // const filter: FilterURL = reactive({ period: undefined })
  const filter = reactive<{ period?: string }>({ period: undefined })
  const route = useRoute()
  const router = useRouter()
  let isUpdated = false

  watch(filter, () => {
      console.log(router)
    if (isUpdated) {
      isUpdated = false
      return
    }

    isUpdated = true

    router.push({
      path: route.path,
      query: Object.keys(filter).reduce((acc, key) => {
        const val = (filter as Record<string, string>)[key]

        if (isNil(val)) return acc
        acc[key] = val
        return acc
      }, {} as Record<string, string>)
    })
  })

  watch(route.query, (query) => {
    console.log(query)
    // if (isUpdated) {
    //   isUpdated = false
    //   return
    // }

    // isUpdated = true

    // Object.keys(query).forEach((key) => {
    //   filter[key] = query[key]
    // })
  })

  onUnmounted(() => {
    homeStore.$dispose()
  })
</script>
