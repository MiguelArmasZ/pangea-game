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
        <Title sx={css.Title} />
        <p className={css.Modality}>{modality}</p>
      </div>
    </header>
  )
}
