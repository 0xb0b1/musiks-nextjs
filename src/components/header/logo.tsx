import { MusicNotesPlus } from 'phosphor-react'

export const Logo = () => {
  return (
    <div className='flex items-center'>
      <MusicNotesPlus size={32} />
      <p className='ml-2 md: text-2xl font-black'>
        Musiks
        <span className='ml-1 text-pink-500'>.</span>
      </p>
    </div>
  )
}
