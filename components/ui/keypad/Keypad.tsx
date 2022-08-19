import NextLink from 'next/link'
import { useConfigGame } from '../../../hooks'
import { ConfigGameBtn } from '../../../interfaces'
import { Button } from '../button/Button'
import css from './Keypad.module.css'

interface Props {
  buttons: ConfigGameBtn[]
  sx?: string
}

export const Keypad = ({ sx = '', buttons }: Props) => {
  const handleConfigGame = useConfigGame()
  return (
    <div className={`${css.Keypad} ${sx}`}>
      {buttons.map(({ href, text, optionConfig }) => (
        <NextLink key={text} href={href} passHref>
          <a onClick={() => handleConfigGame(optionConfig, text)}>
            <Button>{text}</Button>
          </a>
        </NextLink>
      ))}
    </div>
  )
}
