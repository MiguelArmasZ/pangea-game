import css from './Title.module.css'

interface Props {
  sx?: string
}

export const Title = ({ sx = '' }: Props) => {
  return <h1 className={`${css.Title} ${sx}`}>PangeaGame</h1>
}
