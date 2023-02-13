/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next'
import { useState } from 'react'
import { Loading } from '../../components/loading'
import { getCategories, useCategories } from './hooks/useCategories'

interface CategoriesProps {
  categories: {
    items: {
      href: string
      icons: {
        url: string
      }[]
      id: string
      name: string
    }[]
  }
}

export default function Categories({ categories }: CategoriesProps) {
  /* TODO:
   * show playlists for each category when the user open a category
   * api endpoint: 	/browse/categories/{category_id}/playlists
   */

  const [page, setPage] = useState(1)

  const { data, isLoading } = useCategories(page, {
    initialData: categories,
  })

  // console.log('data', data)

  // if (isLoading)
  //   return (
  //     <div className='w-full'>
  //       <Loading />
  //     </div>
  //   )

  return (
    <div className='py-4 px-2 h-home w-full box-border overflow-y-scroll no-scrollbar'>
      <section className='text-gray-50 h-full'>
        <div className='grid grid-cols-4 w-full'>
          {data.items.map((item: any) => (
            <div
              className='relative flex flex-grow items-end rounded-full mx-2 my-2 '
              key={item.id}
            >
              <img
                src={item.icons[0].url}
                alt=''
                className='relative object-cover w-auto rounded-3xl filter blur-none hover:blur-sm'
              />

              <div className='absolute flex items-center m-4'>
                <img src='' alt='' className='bg-green-500 rounded-full' />
                <span className='m-2 font-black text-sm'>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { categories } = await getCategories()

  return {
    props: {
      categories,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
