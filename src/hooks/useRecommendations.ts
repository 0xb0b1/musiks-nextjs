import axios from 'axios'
import { useQuery, UseQueryOptions } from 'react-query'
import { api } from '../services/api'
import { RecommendationsProps } from '../interfaces/index'

type TokenResponseType = {
  access_token: string
}

export async function getRecommendations() {
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

  const { data: tracks } = await api.get(`/recommendations`, {
    headers: {
      Accept: 'applications/json',
      'Content-Type': 'applications/json',
      Authorization: 'Bearer ' + tokenResponse.access_token,
    },
  })

  console.log('trackss', tracks)

  return tracks
}

export function useRecommendations(page: number, options: UseQueryOptions) {
  return useQuery<any>(['recommendations', page], () => getRecommendations(), {
    staleTime: 1000 * 60 * 10,
    ...options,
  })
}
