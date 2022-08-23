import { Fragment } from 'react'
import { useMainContext, useReply } from '../../../hooks'
import { Country } from '../../../interfaces'
import { Button } from '../'
import css from './Options.module.css'

interface Props {
  availableQuestions: Country[]
}

export const Options = ({ availableQuestions }: Props) => {
  const {
    round,
    configGame: { modality }
  } = useMainContext()
  const [correctReply] = round
  const { capital, name: countryName } = correctReply

  const { handleReply } = useReply()

  return (
    <>
      <div className={css.Options}>
        <Button onClick={handleReply} name={countryName}>
          {modality === 'capitales' && capital}
          {modality === 'banderas' && countryName}
        </Button>
        {availableQuestions
          .map(({ capital, name }) => (
            <Fragment key={name}>
              {modality === 'capitales' && (
                <Button onClick={handleReply} name={capital}>
                  {capital}
                </Button>
              )}
              {modality === 'banderas' && (
                <Button onClick={handleReply} name={name}>
                  {name}
                </Button>
              )}
            </Fragment>
          ))
          .slice(1, 4)}
      </div>
    </>
  )
}
