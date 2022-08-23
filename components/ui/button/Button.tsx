import { MouseEventHandler, ReactNode } from 'react'
import css from './Button.module.css'

interface Props {
  children: ReactNode
  sx?: string
  lineStyle?: object
  name?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({
  children,
  sx = '',
  name = '',
  lineStyle = {},
  onClick
}: Props) => {
  return (
    <button
      onClick={onClick!}
      name={name}
      style={lineStyle}
      className={`${css.Button} ${sx}`}
    >
      {children}
    </button>
  )
}
