import Image from 'next/image'
import { useEffect } from 'react'
import { PlayLayout } from '../components/layouts'
import { BackBtn, Options, Paragraph, Score } from '../components/ui'
import { getNotSelected } from '../helpers'
import { useMainContext } from '../hooks'

const PlayPage = () => {
  const {
    round,
    configGame: { modality },
    score,
    setScore
  } = useMainContext()
  const [question] = round
  const availableQuestions = getNotSelected(round)

  useEffect(() => {
    setScore({ ...score, remainingQuestions: round.length - 1 })
  }, [round])

  return (
    <PlayLayout>
      <Score />
      {modality === 'capitales' && (
        <>
          <Paragraph>
            ¿cúal es la capital de <strong>{question.name}</strong>?
          </Paragraph>
          <Options availableQuestions={availableQuestions} />
        </>
      )}
      {modality === 'banderas' && (
        <>
          <Paragraph>¿a qué país pertenece esta bandera?</Paragraph>
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
