import { useMainContext } from '../../../hooks'
import { Button } from '../'
import css from './Options.module.css'
import { Country } from '../../../interfaces'

interface Props {
  availableQuestions: Country[]
}

export const Options = ({ availableQuestions }: Props) => {
  const {
    round,
    configGame: { modality }
  } = useMainContext()
  const [correct] = round
  const { capital, name: countryName } = correct

  function handleReply(event: any) {
    const reply = event.target.name

    if (reply === countryName) {
      return console.log('es correcto')
    }

    if (reply !== countryName) {
      return console.log('es INNNcorrecto')
    }
  }

  return (
    <>
      {modality === 'capitales' && (
        <div className={css.Options}>
          <Button onClick={handleReply} name={countryName}>
            {capital}
          </Button>
          {availableQuestions
            .map(({ capital }) => (
              <Button
                onClick={handleReply}
                key={capital}
                name={capital}
              >
                {capital}
              </Button>
            ))
            .slice(1, 4)}
        </div>
      )}
      {modality === 'banderas' && (
        <div className={css.Options}>
          <Button onClick={handleReply} name={countryName}>
            {capital}
          </Button>
          {availableQuestions
            .map(({ name }) => (
              <Button onClick={handleReply} key={name} name={name}>
                {name}
              </Button>
            ))
            .slice(1, 4)}
        </div>
      )}
    </>
  )
}
