import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  sx?: string
}

export const Paragraph = ({ children, sx = '' }: Props) => {
  return <p className={sx}>{children}</p>
}
