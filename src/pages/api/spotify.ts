import SpotifyWebApi from 'spotify-web-api-node'

const scopes = [
  'user-read-private',
  'streaming',
  'playlist-read-private',
  'user-read-playback-state',
]

const state = 'some-state-of-my-choice'

export const spotifyWebApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
})

// export const getRecommendations.spotifyWebApi.getRecommendations

// spotifyWebApi.clientCredentialsGrant().then(
//   function (data) {
//     spotifyWebApi.setAccessToken(data.body['access_token'])
//   },
//   function (err) {
//     console.error('Something went wrong!', err)
//   },
// )

// spotifyWebApi.authorizationCodeGrant.(code).then(
//   function(data) {
//     console.log('The token expires in ' + data.body['expires_in']);
//     console.log('The access token is ' + data.body['access_token']);
//     console.log('The refresh token is ' + data.body['refresh_token']);

//     spotifyWebApi.setAccessToken(data.body['access_token']);
//     spotifyWebApi.setRefreshToken(data.body['refresh_token']);
//   },
//   function(err) {
//     console.log('Something went wrong!', err);
//   }
// )
