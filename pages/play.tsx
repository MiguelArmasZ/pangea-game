import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import { PlayLayout } from '../components/layouts'
import { BackBtn, Options, Paragraph, Score } from '../components/ui'
import { getNotSelected } from '../helpers'
import { useMainContext } from '../hooks'
import { Country } from '../interfaces'

const PlayPage = () => {
  const [availableQuestions, setAvailableQuestions] = useState<
    Country[]
  >([])
  const {
    round,
    configGame: { modality },
    score,
    setScore,
    feedbackReply
  } = useMainContext()
  const [question] = round

  useEffect(() => {
    setAvailableQuestions(getNotSelected(round))
    setScore({ ...score, remainingQuestions: round.length - 1 })
  }, [round])

  return (
    <PlayLayout>
      <Score />
      {modality === 'capitales' && (
        <>
          <Paragraph sx={feedbackReply === 0 ? 'fade' : ''}>
            ¿cúal es la capital de <strong>{question.name}</strong>?
          </Paragraph>
          <Options availableQuestions={availableQuestions} />
        </>
      )}
      {modality === 'banderas' && (
        <>
          <Paragraph sx={feedbackReply === 0 ? 'fade' : ''}>
            ¿a qué país pertenece esta bandera?
          </Paragraph>
          <Image
            src={`/flags/${question.flag}.png`}
            width={70}
            height={70}
            alt='bandera'
          />
          <Options availableQuestions={availableQuestions} />
        </>
      )}
      <BackBtn />
    </PlayLayout>
  )
}

export default PlayPage
