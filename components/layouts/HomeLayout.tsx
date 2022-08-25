import Head from 'next/head'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const origin =
  typeof window === 'undefined' ? '' : window.location.origin

export const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>
          PangeaGame | Aprende geografía mientras te diviertes
        </title>
        <meta name='author' content='Miguel Armas' />
        <meta
          name='description'
          content='un juego para aprender geografía'
        />
        <meta
          name='keywords'
          content='geografía, juego, aprender, supergeografia'
        />

        <meta
          property='og:title'
          content='Aprende geogrfía jugando'
        />
        <meta
          property='og:description'
          content='Aprende sobre las capitales y banderas de los países de todo el mundo'
        />
        <meta
          property='og:image'
          content={`${origin}/mark/banner.png`}
        />
      </Head>
      <main className='home-layout fade'>{children}</main>
    </>
  )
}
