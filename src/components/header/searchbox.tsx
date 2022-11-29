import { MagnifyingGlass } from 'phosphor-react'
import { useRef } from 'react'

export const SearchBox = () => {
  const searchInputRef = useRef<HTMLInputElement>(null)

  return (
    <label className='hidden md:flex flex-1 py-2 px-4 ml-20 max-w-min relative items-center text-gray-100 bg-gray-800 rounded-full'>
      <input
        className='px-4 mr-4 border-none rounded-2xl text-gray-50 bg-gray-800 placeholder-gray-400'
        type='text'
        placeholder='Search'
        ref={searchInputRef}
      />
      <MagnifyingGlass size={32} className='items-center' />
    </label>
  )
}
