import axios from 'axios'
import { api } from '../../services/api'

export const getCategories = async () => {
  const refreshTokenResponse = await axios.post(
    'https://accounts.spotify.com/api/token',
    { grant_type: 'client_credentials' },
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ZWI3ZTQ0MWZkNTZhNGY5YWExZDNhMWEzZTM4ZjU5NjE6YWY1NzQzZjU4YzE0NDc5Njk5ZGQ1Y2Q0ZDYzYzQxZWE=',
      },
    },
  )

  const response = await api.get(`/browse/categories`, {
    headers: {
      Accept: 'applications/json',
      'Content-Type': 'applications/json',
      Authorization: 'Bearer ' + refreshTokenResponse.data.access_token,
    },
  })

  // console.log(response.data)
  return response.data
}
