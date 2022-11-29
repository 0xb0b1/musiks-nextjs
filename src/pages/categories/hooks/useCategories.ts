import axios from 'axios'
import { useQuery, UseQueryOptions } from 'react-query'
import { api } from '../../../services/api'

export async function getCategories() {
  const grantType = {
    /* eslint-disable camelcase */
    grant_type: 'client_credentials',
  }

  const tokenResponse = await axios.post('https://accounts.spotify.com/api/token', grantType, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ZWI3ZTQ0MWZkNTZhNGY5YWExZDNhMWEzZTM4ZjU5NjE6YWY1NzQzZjU4YzE0NDc5Njk5ZGQ1Y2Q0ZDYzYzQxZWE=',
    },
  })

  const { data: categories, headers } = await api.get(`/browse/categories?limit=50`, {
    params: {
      limit: 50,
    },
    headers: {
      Accept: 'applications/json',
      'Content-Type': 'applications/json',
      Authorization: 'Bearer ' + tokenResponse.access_token,
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
