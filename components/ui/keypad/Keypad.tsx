import NextLink from 'next/link'
import { ConfigGameBtn } from '../../../interfaces'
import { Button } from '../button/Button'
import css from './Keypad.module.css'

interface Props {
  buttons: ConfigGameBtn[]
  sx?: string
}

export const Keypad = ({ sx = '', buttons }: Props) => {
  return (
    <div className={`${css.Keypad} ${sx}`}>
      {buttons.map(({ href, text }) => (
        <NextLink key={text} href={href} passHref>
          <a>
            <Button>{text}</Button>
          </a>
        </NextLink>
      ))}
    </div>
  )
}
