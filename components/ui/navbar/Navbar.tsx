import NextLink from 'next/link'
import { useMainContext } from '../../../hooks'
import { Title } from '../title/Title'
import css from './Navbar.module.css'

export const Navbar = () => {
  const {
    configGame: { modality }
  } = useMainContext()

  return (
    <header className={css.Navbar}>
      <div className={css.Wrap}>
        <NextLink href='/' passHref>
          <a>
            <Title sx={css.Title} />
          </a>
        </NextLink>
        <p className={css.Modality}>{modality}</p>
      </div>
    </header>
  )
}
