import type { UnwrapNestedRefs } from 'vue'
import { reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { LocationQueryValue } from 'vue-router'
import { isNil } from 'lodash'
import type { FilterURL } from '@/models/filter.model'

interface ObserveFilter {
  <T extends FilterURL>(vals: T, cb?: Function): UnwrapNestedRefs<T>
}

const observeFilter: ObserveFilter = (filterValues, callback) => {
  const filter = reactive(filterValues)
  const route = useRoute()
  const router = useRouter()
  // let isUpdated: boolean

  watch(filter, () => {
    // if (isUpdated) return

    // isUpdated = true

    setTimeout(() => {
      router.push({
        path: route.path,
        query: Object.keys(filter).reduce((acc, key) => {
          if (isNil(filter[key])) return acc

          acc[key] = String(filter[key])
          return acc
        }, {} as Record<string, string>)
      })

      if (callback) callback()
    }, 100)
  })
  // console.log(filter)
  // watch(route.query, () => {
  //   if (isUpdated) return

  //   isUpdated = true

  //   Object.keys(filterValues).forEach((key) => {
  //     filter[key] = route.query[key] || ''
  //   })
  // })

  return filter
}

export default observeFilter
