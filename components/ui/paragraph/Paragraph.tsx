import { ReactNode } from 'react'
import css from './Paragraph.module.css'

interface Props {
  children: ReactNode
  sx?: string
}

export const Paragraph = ({ children, sx = '' }: Props) => {
  return <p className={`${css.Paragraph} ${sx}`}>{children}</p>
}
