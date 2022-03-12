import { defineStore } from 'pinia'
import { auth, getCategoryList, getFilterCollection, getUser } from '@/api/common'
import type User from '@/models/user.model'
import type { FilterCollection } from '@/models/filter.model'
import type Category from '@/models/category.model'

type MainState = {
  user?: User
  categories?: Category[]
  filters?: FilterCollection
}

const useMainStore = defineStore('main', {
  state: (): MainState => ({
    user: undefined,
    categories: undefined,
    filters: undefined
  }),

  actions: {
    async getUser() {
      try {
        const data = await getUser()
        this.user = data
      } catch {
        auth()
      }
    },

    async getCategoryList() {
      if (this.categories?.length) return

      const data = await getCategoryList()
      this.categories = data.categories
    },

    async getFilterCollection() {
      const data = await getFilterCollection()
      this.filters = data.filters
    }
  },

  getters: {}
})

export default useMainStore
