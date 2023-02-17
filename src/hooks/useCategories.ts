import axios from 'axios'
import { useQuery, UseQueryOptions } from 'react-query'
import { api } from '../services/api'
import qs from 'qs'

type CategoriesType = {
  categories: {
    items: {
      href: string
      icons: {
        url: string
      }[]
      id: string
      name: string
    }[]
  }
}
type TokenResponseType = {
  access_token: string
}

export async function getCategories() {
  const grantType = {
    grant_type: 'client_credentials',
  }

  const tokenResponse: TokenResponseType = await axios.post(
    'https://accounts.spotify.com/api/token',
    grantType,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ZWI3ZTQ0MWZkNTZhNGY5YWExZDNhMWEzZTM4ZjU5NjE6YWY1NzQzZjU4YzE0NDc5Njk5ZGQ1Y2Q0ZDYzYzQxZWE=',
      },
    },
  )

  const { data: categories } = await api.get<CategoriesType>(`/browse/categories`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenResponse.access_token}`,
    },
  })

  return categories
}

export function useCategories(page: number, options: UseQueryOptions) {
  return useQuery<any>(['categories', page], () => getCategories(), {
    staleTime: 1000 * 60 * 10,
    ...options,
  })
}
