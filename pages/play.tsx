import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
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
    feedbackReply,
    score,
    setScore
  } = useMainContext()
  const [question] = round

  const { push } = useRouter()

  useEffect(() => {
    setAvailableQuestions(getNotSelected(round))
    setScore({ ...score, remainingQuestions: round.length - 1 })
  }, [round])

  useEffect(() => {
    if (score.remainingQuestions === 0) {
      setTimeout(() => {
        push('/results')
      }, 1000)
    }
  }, [score.remainingQuestions])

  return (
    <PlayLayout sx={score.remainingQuestions === 0 ? 'fadeOut' : ''}>
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
