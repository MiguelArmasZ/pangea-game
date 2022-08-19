import css from './Button.module.css'

interface Props {
  children: string | number
  sx?: string
}

export const Button = ({ children, sx = '' }: Props) => {
  return <button className={`${css.Button} ${sx}`}>{children}</button>
}
