import { ReactNode } from 'react'
import { Navbar } from '../ui'

interface Props {
  children: ReactNode
}

export const PlayLayout = ({ children }: Props) => {
  return (
    <main className='content fade'>
      <Navbar />
      {children}
    </main>
  )
}
