import type { FilterCollection } from '@/models/filter.model'

type Unit = {
  name: string
  num_down: number
  num_up: string
  val: string
}

type UnitCollection = {
  avg: string
  total: string
  data: Unit[]
}

export type Card = {
  blocked_data: boolean
  cat_id: number
  cat_name: string
  data_version_date: string
  diff: string
  difference_means: string
  editable: boolean
  formatted_date: string
  id: number
  in_progress: boolean
  measure: string
  name: string
  order_type: number
  period: string
  value: string
  mo: UnitCollection
  mr: UnitCollection
  options: {
    [Key in keyof FilterCollection]?: number
  }
}
