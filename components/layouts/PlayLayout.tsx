import Head from 'next/head'
import { ReactNode } from 'react'
import { useMainContext } from '../../hooks'
import { Navbar } from '../ui'

interface Props {
  children: ReactNode
  sx?: string
}

export const PlayLayout = ({ children, sx = '' }: Props) => {
  const {
    configGame: { modality }
  } = useMainContext()

  return (
    <main className={`home-layout fade ${sx}`}>
      <Head>
        <title>Modo de juego - {modality}</title>
      </Head>
      <Navbar />
      {children}
    </main>
  )
}
