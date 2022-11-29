import { Plus } from 'phosphor-react'
import { useState } from 'react'

function Playlists() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleOpenModal = () => {
    setIsOpenModal(true)
  }

  const NewPlaylistModal = () => {
    return (
      <div className='fixed bg-gray-800 w-64 mx-0 my-auto flex right-0 left-0 items-center justify-center'>
        <div className='mb-3 xl:w-96'>
          <label
            htmlFor='exampleFormControlInput1'
            className='form-label inline-block mb-2 text-gray-700'
          >
            Example label
          </label>
          <input
            type='text'
            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            id='exampleFormControlInput1'
            placeholder='Example label'
          />
        </div>
      </div>
    )
  }

  return (
    <>
      {isOpenModal ? <NewPlaylistModal /> : null}
      <div className='w-full px-4 h-home text-gray-200 overflow-y-auto no-scrollbar'>
        <header>
          <h2 className='mt-2 text-lg font-semibold'>My Playlists</h2>
        </header>
        <section className='w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4'>
          <div className='flex items-center justify-center h-68 w-68 bg-gray-800 rounded-xl hover:bg-gray-700'>
            <button type='button' className='flex flex-col items-center '>
              <Plus size={32} />
              <span onClick={handleOpenModal} className='text-lg font-semibold'>
                New Playlist
              </span>
            </button>
          </div>
          <div className='flex items-center justify-center'>
            <img
              className='rounded-xl h-full w-full'
              src='https://cdn.playlists.net/images/playlists/image/medium/fcaf2e92e02d4180c525fe6935dd6108.jpg'
              alt='Summer Vibes'
            />
          </div>
          <div className='flex items-center justify-center'>
            <img
              className='rounded-xl h-full w-full'
              src='https://i.pinimg.com/originals/cb/ac/c3/cbacc3cd94470d4df50da4842ec5fe49.jpg'
              alt='Lofi'
            />
          </div>
          <div className='flex items-center justify-center'>
            <img
              className='rounded-xl h-full w-full'
              src='https://i.pinimg.com/originals/d3/b1/25/d3b1252338c0461134e34aa7f902552e.jpg'
              alt='Happy Hour'
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default Playlists
