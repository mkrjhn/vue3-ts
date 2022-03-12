import axios from 'axios'
import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API,
  withCredentials: true
})

api.interceptors.response.use((response: AxiosResponse) => {
  return response.data
}, (error: AxiosError) => {
  return Promise.reject(error.response)
})

export default api
