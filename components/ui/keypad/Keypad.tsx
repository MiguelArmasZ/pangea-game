import { ReactNode } from 'react'
import css from './Keypad.module.css'

interface Props {
  children: ReactNode
  sx?: string
}

export const Keypad = ({ children, sx = '' }: Props) => {
  return <div className={`${css.Keypad} ${sx}`}>{children}</div>
}
