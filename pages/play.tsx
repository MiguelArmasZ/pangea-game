import Image from 'next/image'
import { PlayLayout } from '../components/layouts'
import { BackBtn, Options, Paragraph, Score } from '../components/ui'
import { useGameFlow, useMainContext } from '../hooks'

const PlayPage = () => {
  const {
    round,
    configGame: { modality },
    feedbackReply,
    score
  } = useMainContext()
  const [question] = round

  const { availableQuestions } = useGameFlow()

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
