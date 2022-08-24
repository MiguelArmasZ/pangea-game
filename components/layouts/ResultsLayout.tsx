import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const ResultsLayout = ({ children }: Props) => {
  return <main className='results-layout fade'>{children}</main>
}
