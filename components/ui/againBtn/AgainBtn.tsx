import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  CONFIG_GAME_INITIAL_STATE,
  SCORE_INITIAL_STATE
} from '../../../context'
import { useMainContext } from '../../../hooks'
import css from './AgainBtn.module.css'

export const AgainBtn = () => {
  const { setConfigGame, setRound, setScore, setSpinner } =
    useMainContext()
  const { push } = useRouter()

  function resetGame() {
    push('/')
    setConfigGame(CONFIG_GAME_INITIAL_STATE)
    setScore(SCORE_INITIAL_STATE)
    setRound([])
    setSpinner(true)
  }

  return (
    <button className={css.AgainBtn} onClick={resetGame}>
      <Image
        src='/icons/refresh.png'
        width={25}
        height={25}
        alt='volver atrás'
        priority
      />
    </button>
  )
}
