import axios from 'axios'
import { isDevelopmentMode } from '@/utils'

const BASE_URL = isDevelopmentMode() ? '/api' : 'https://api.bingo.api.maio.co'

export const APIRequest = axios.create({ baseURL: BASE_URL, withCredentials: true })

export function setAuth (apiToken: string) {
  APIRequest.defaults.headers.common['Authorization'] = `Bearer ${apiToken}`
}

export const fetcherData = (url: string) => {
  return APIRequest.get(url).then(res => res.data.data)
}

export const fetcher = (url: string) => {
  return APIRequest.get(url).then(res => res.data)
}
