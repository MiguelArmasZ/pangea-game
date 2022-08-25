import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMainContext } from '../../../hooks'
import css from './BackBtn.module.css'

interface Props {
  typeBtn: 'back' | 'backAndDelete'
}

export const BackBtn = ({ typeBtn }: Props) => {
  const { back } = useRouter()
  const { confirmation, setConfirmation } = useMainContext()

  function goBack() {
    back()
  }

  function openModal() {
    setConfirmation({ ...confirmation, isActive: true })
  }

  return (
    <button
      className={css.BackBtn}
      onClick={typeBtn === 'back' ? goBack : openModal}
    >
      <Image
        src='/icons/back.png'
        width={25}
        height={25}
        alt='volver atrás'
        priority
      />
    </button>
  )
}
