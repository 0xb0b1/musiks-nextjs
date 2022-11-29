import Image from 'next/image'
import { useState } from 'react'
import Slider from 'rc-slider'

import play from '../../../public/assets/play.svg'
import pause from '../../../public/assets/pause.svg'
import next from '../../../public/assets/play-next.svg'
import prev from '../../../public/assets/play-previous.svg'
import playing from '../../../public/assets/playing.svg'
import shuffle from '../../../public/assets/shuffle.svg'
import repeat from '../../../public/assets/repeat.svg'

import 'rc-slider/assets/index.css'
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString'

export const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)
  // const [isLooping, setisLooping] = useState(true)

  return (
    <div className='hidden lg:flex flex-col items-center justify-between px-4 py-4 h-home w-96 text-white bg-gradient-to-t from-gray-800'>
      <header className='flex items-center gap-2'>
        <Image width={24} height={24} src={playing} alt='Playing Now' />
        <strong className='font-semibold'>Playing Now</strong>
      </header>

      {isPlaying ? (
        <div className='flex flex-col items-center justify-center h-96 w-full rounded-3xl bg-gradient-to-t p-4 text-center'>
          <img
            src='https://upload.wikimedia.org/wikipedia/pt/e/e8/Happier_Than_Ever_%28%C3%A1lbum%29_-_Billie_Eilish.png'
            alt=''
            className='rounded-3xl h-auto object-cover'
          />
          <strong className='block font-semibold mt-8 text-xl leading-7'> Happier Than Ever</strong>
          <span className='block mt-4 text-opacity-60 leading-6'>Billie Eilish</span>
        </div>
      ) : (
        <div className='flex items-center justify-center w-full h-96 rounded-3xl bg-gradient-to-t p-4 text-center'>
          <strong>Select a playlist</strong>
        </div>
      )}

      <footer>
        <div className='flex justify-between items-center text-sm'>
          <span className='inline-flex px-2 text-center'>{convertDurationToTimeString(0)}</span>
          <div className='flex-1'>
            {isPlaying ? (
              <Slider
                max={240}
                value={0}
                trackStyle={{ backgroundColor: '#04d361' }}
                railStyle={{ backgroundColor: '#323232' }}
                handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
              ></Slider>
            ) : (
              <div className='h-1 bg-purple-300 '></div>
            )}
          </div>
          <span className='inline-flex px-2 text-center'>{convertDurationToTimeString(240)}</span>
        </div>

        <div className='flex items-center justify-center my-4 gap-4'>
          <button type='button' onClick={() => setIsShuffle(!isShuffle)}>
            <Image width={24} height={24} src={shuffle} alt='Shuffle' />
          </button>
          <button type='button'>
            <Image width={24} height={24} src={prev} alt='Previous' />
          </button>
          <button
            className='flex items-center justify-center bg-gray-700 w-12 h-12 rounded-xl'
            type='button'
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Image src={pause} alt='Play' /> : <Image src={play} alt='Play' />}
          </button>
          <button type='button'>
            <Image width={24} height={24} src={next} alt='Next' />
          </button>
          <button type='button'>
            <Image width={24} height={24} src={repeat} alt='Repeat' />
          </button>
        </div>
      </footer>
    </div>
  )
}
