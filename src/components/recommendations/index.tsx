import Link from 'next/link'
import { Heart, Play } from 'phosphor-react'
import { RecommendationsProps } from '../../interfaces'

export const Recommendations = ({ tracks }: RecommendationsProps) => {
  return (
    <section className='pb-8'>
      <h2 className='mt-8 mb-2 font-semibold'>Recomended playlists</h2>

      <table className='w-full bg-gray-800 rounded-3xl'>
        <thead>
          <tr>
            <th></th>
            <th className='px-4 py-3 text-gray-200 uppercase font-medium text-xs text-left'>
              Name
            </th>
            <th className='px-4 py-3 text-gray-200 uppercase font-medium text-xs text-left'>
              Release Date
            </th>
            <th className='px-4 py-3 text-gray-200 uppercase font-medium text-xs text-left'></th>
            <th className='px-4 py-3 text-gray-200 uppercase font-medium text-xs text-left'>
              Number of Tracks
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((item) => (
            <tr key={item.id}>
              <td style={{ width: 72 }} className='px-4 py-3 text-sm'>
                <img src={item.album.images[0].url} alt='N' className='w-8 h-8 rounded-sm' />
              </td>
              <td>
                <Link
                  className='text-gray-100 font-semibold text-none leading-6 text-xs hover:underline'
                  href='/'
                >
                  {item.name.split(' ', 4).join(' ')} ...
                </Link>
              </td>
              <td className='px-4 py-3 text-sm'>{item.album.release_date}</td>
              <td style={{ width: 100 }} className='px-4 py-3 text-sm'></td>
              <td className='px-4 py-3 text-sm'>{item.album.total_tracks}</td>
              <td className='px-4 py-3 text-sm flex gap-4'>
                <button type='button'>
                  <Heart color='white' size={22} />
                </button>
                <button
                  type='button'
                  className='w-8 h-8 flex items-center justify-center  bg-gray-700 rounded-lg'
                >
                  <Play color='green' size={22} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
