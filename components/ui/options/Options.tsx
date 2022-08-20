import { useMainContext } from '../../../hooks'
import { Button } from '../'
import css from './Options.module.css'
import { Country } from '../../../interfaces'

interface Props {
  availableQuestions: Country[]
}

export const Options = ({ availableQuestions }: Props) => {
  const { round } = useMainContext()

  return (
    <div className={css.Options}>
      <Button>{round[0].capital}</Button>
      {availableQuestions
        .map(({ capital }) => (
          <Button key={capital}>{capital}</Button>
        ))
        .slice(1, 4)}
    </div>
  )
}
