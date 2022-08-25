import { useRouter } from 'next/router'
import { useMainContext } from '../../../hooks'
import { Button } from '../button/Button'
import css from './Confirmation.module.css'

export const Confirmation = () => {
  const { score, setScore, confirmation, setConfirmation } =
    useMainContext()
  const { back } = useRouter()

  function closeModal() {
    setConfirmation({ ...confirmation, isActive: false })
  }

  function deleteScore() {
    back()
    setScore({ ...score, correct: 0, incorrect: 0 })
    setConfirmation({ ...confirmation, isActive: false })
  }

  return (
    <div className={`${css.Modal} fade `}>
      <section className={`${css.Wrap} content  move-down`}>
        <h3 className={css.Message}>
          perderás todo el progreso de esta partida...
        </h3>

        <div className={css.Keypad}>
          <Button onClick={deleteScore} sx={css.Continue}>
            continuar
          </Button>
          <Button onClick={closeModal}>cancelar</Button>
        </div>
      </section>
    </div>
  )
}
