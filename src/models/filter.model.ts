// import type { LocationQueryValue } from 'vue-router'

export type FilterItem = {
  data: Array<{ val: number; name: string }>
  default_value: string
  descr: string
  url_param: string
}

export type FilterProfile = Omit<FilterItem, 'descr'> & {
  profile_type_id: number
}

export type FilterCollection = {
  age: FilterItem
  critical_type: FilterItem
  entity: FilterItem
  entity_type: FilterItem
  grouping_type: FilterItem
  measure_type: FilterItem
  morbidity: FilterItem
  morbidity_ind: FilterItem
  mortality_ind_month: FilterItem
  mortality_ind_year: FilterItem
  population: FilterItem
  quarter: FilterItem
  year2: FilterItem
  profile_type: FilterItem
  profiles: {
    descr: string
    primary_profiles: FilterProfile
    secondary_profiles: FilterProfile
    bed_profiles: FilterProfile
  }
}

export type FilterURL = {
  [K in keyof Omit<FilterCollection, 'profiles'>]?: string
} & {
  period?: string
  profile_id?: string
}

// interface T extends FilterURL {}

// export const a: T = {
//   profile_id: 'adf'
// }
