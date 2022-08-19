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
  const { configGame, handleConfigGame, isActive, setActiveBtn } =
    useConfigGame()

  return (
    <div className={`${css.Keypad} ${sx}`}>
      {buttons.map(({ href, text, optionConfig }, index) => (
        <NextLink key={text} href={href} passHref>
          <a
            onClick={() => {
              handleConfigGame(optionConfig, text)
              setActiveBtn(index)
            }}
          >
            <Button
              sx={
                isActive === index ||
                configGame[optionConfig] === text
                  ? css.ActiveBtn
                  : ''
              }
            >
              {text}
            </Button>
          </a>
        </NextLink>
      ))}
    </div>
  )
}
