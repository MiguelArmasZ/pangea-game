import Image from 'next/image'
import css from './Developed.module.css'

export const Developed = () => {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href='https://mikecode.dev/'
      className={css.Developed}
    >
      <p className={css.Text}>developed by</p>
      <Image
        src='/mark/logo.png'
        width={40}
        height={40}
        alt='logotipo de mikecode'
      />
    </a>
  )
}
