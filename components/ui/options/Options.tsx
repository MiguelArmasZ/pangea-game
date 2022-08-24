/* eslint-disable indent */
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
    configGame: { modality },
    feedbackReply
  } = useMainContext()
  const [correctReply] = round
  const { capital, name: countryName } = correctReply

  const { handleReply } = useReply()

  return (
    <>
      <div
        className={`${css.Options} ${
          feedbackReply === 0 ? 'fade' : ''
        }`}
      >
        <Button
          sx={feedbackReply > 0 ? css.Correct : ''}
          onClick={handleReply}
          name={countryName}
        >
          {modality === 'capitales' && capital}
          {modality === 'banderas' && countryName}
        </Button>
        {availableQuestions
          .map(({ capital, name }) => (
            <Button
              key={name}
              sx={feedbackReply === 2 ? css.Incorrect : ''}
              onClick={handleReply}
              name={modality === 'capitales' ? capital : name}
            >
              {modality === 'capitales' ? capital : name}
            </Button>
          ))
          .slice(1, 4)}
      </div>
    </>
  )
}
