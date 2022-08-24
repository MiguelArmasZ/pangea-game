import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const HomeLayout = ({ children }: Props) => {
  return <main className='home-layout fade'>{children}</main>
}
