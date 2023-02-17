import React from 'react'

import type { AppProps } from 'next/app'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { Header } from '../components/header'
import { SideBar } from '../components/sidebar'
import { Player } from '../components/player'

import '../styles/styles.scss'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <div className='bg-gray-900 flex flex-col mx-0'>
        <Header />
        <main className='flex'>
          <SideBar />

          <Component {...pageProps} />

          <Player />
        </main>
      </div>
    </QueryClientProvider>
  )
}
