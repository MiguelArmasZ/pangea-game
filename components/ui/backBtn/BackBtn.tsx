import Image from 'next/image'
import { useRouter } from 'next/router'
import css from './BackBtn.module.css'

export const BackBtn = () => {
  const { back } = useRouter()

  return (
    <button className={css.BackBtn} onClick={() => back()}>
      <Image
        src='/icons/back.png'
        width={25}
        height={25}
        alt='volver atrás'
      />
    </button>
  )
}
