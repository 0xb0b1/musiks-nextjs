import Link from 'next/link'
import { Folder, House, Playlist } from 'phosphor-react'

export const SideBar = () => {
  return (
    <aside className='flex px-2 py-2 w-auto bg-gradient-to-t from-gray-800 h-home'>
      <ul className='flex flex-col gap-2 text-white py-4'>
        <li>
          <Link
            className='has-tooltip bg-gray-800 w-auto h-12 flex items-center gap-2 px-4 rounded-3xl cursor-pointer'
            href='/'
          >
            <House size={22} />
            <span className='tooltip bg-gray-700 rounded-xl p-4 font-semibold text-sm text-gray-200'>
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link
            className='has-tooltip bg-gray-800 w-auto h-12 flex items-center gap-2 px-4 rounded-3xl cursor-pointer'
            href='/categories'
          >
            <Folder size={22} />
            <span className='tooltip bg-gray-700 rounded-xl p-4 font-semibold text-sm text-gray-200'>
              Categories
            </span>
          </Link>
        </li>
        <li>
          <Link
            className='has-tooltip bg-gray-800 w-auto h-12 flex items-center gap-2 px-4 rounded-3xl cursor-pointer'
            href='/playlists'
          >
            <Playlist size={22} />
            <span className='tooltip bg-gray-700 rounded-xl p-4 font-semibold text-sm text-gray-200'>
              Playlists
            </span>
          </Link>
        </li>
      </ul>
    </aside>
  )
}
