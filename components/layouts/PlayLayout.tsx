import { ReactNode } from 'react'
import { Navbar } from '../ui'

interface Props {
  children: ReactNode
  sx?: string
}

export const PlayLayout = ({ children, sx = '' }: Props) => {
  return (
    <main className={`home-layout fade ${sx}`}>
      <Navbar />
      {children}
    </main>
  )
}
