import NextLink from 'next/link'
import { Title } from '../title/Title'
import css from './Navbar.module.css'

export const Navbar = () => {
  return (
    <header className={css.Navbar}>
      <div className={css.Wrap}>
        <NextLink href='/' passHref>
          <a>
            <Title sx={css.Title} />
          </a>
        </NextLink>
      </div>
    </header>
  )
}
