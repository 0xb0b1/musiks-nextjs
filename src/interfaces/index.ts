export interface RecommendationsProps {
  tracks: {
    name: string
    id: string
    href: string
    is_playable: boolean
    uri: string
    album: {
      id: string
      images: {
        height: string
        url: string
        width: string
      }[]
      name: string
      total_tracks: number
      release_date: string
      uri: string
      is_playable: boolean
    }
  }[]
}
