import Image from 'next/image'
import { PlayLayout } from '../components/layouts'
import {
  BackBtn,
  Confirmation,
  Options,
  Paragraph,
  Score
} from '../components/ui'
import {
  useGameFlow,
  useMainContext,
  useProtectRoutes
} from '../hooks'

const PlayPage = () => {
  const {
    round,
    configGame: { modality },
    feedbackReply,
    score,
    confirmation: { isActive }
  } = useMainContext()
  const [question] = round
  const { availableQuestions } = useGameFlow()
  useProtectRoutes()

  const feedbackAnimation = feedbackReply === 0 ? 'fade' : ''

  return (
    <PlayLayout sx={score.remainingQuestions === 0 ? 'fadeOut' : ''}>
      <Score />
      {modality === 'capitales' && (
        <>
          <Paragraph sx={feedbackAnimation}>
            ¿cúal es la capital de <strong>{question.name}</strong>?
          </Paragraph>
          <Options availableQuestions={availableQuestions} />
        </>
      )}
      {modality === 'banderas' && (
        <>
          <Paragraph sx={feedbackAnimation}>
            ¿a qué país pertenece esta bandera?
          </Paragraph>
          <span className={feedbackReply === 0 ? 'fade-large' : ''}>
            <Image
              priority
              src={`/flags/${question.flag}.png`}
              width={70}
              height={70}
              alt='bandera'
            />
          </span>
          <Options availableQuestions={availableQuestions} />
        </>
      )}
      {isActive && <Confirmation />}
      {!isActive && <BackBtn typeBtn='backAndDelete' />}
    </PlayLayout>
  )
}

export default PlayPage
