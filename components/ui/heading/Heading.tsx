import css from './Heading.module.css'

interface Props {
  children: string
}

export const Heading = ({ children }: Props) => {
  return <h2 className={css.Heading}>{children}</h2>
}
