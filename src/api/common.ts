import api from '@/api'

import type User from '@/models/user.model'
import type { FilterCollection } from '@/models/filter.model'
import type Categrory from '@/models/category.model'

const auth = () => {
  const url = '?r=login/login'
  window.location.replace(import.meta.env.VITE_API + url)
}

const getUser = (): Promise<User> => api.get('?r=users/userdata')

const getCategoryList = (): Promise<{ categories: Categrory[] }> => api.get('?r=main/categories')

const getFilterCollection = (): Promise<{ filters: FilterCollection }> => api.get('?r=main/filters')

export {
  auth,
  getUser,
  getCategoryList,
  getFilterCollection
}
