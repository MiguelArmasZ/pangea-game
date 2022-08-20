import Image from 'next/image'
import { PlayLayout } from '../components/layouts'
import { Options, Paragraph } from '../components/ui'
import { getNotSelected } from '../helpers'
import { useMainContext } from '../hooks'

const PlayPage = () => {
  const {
    round,
    configGame: { modality }
  } = useMainContext()
  const [question] = round
  const availableQuestions = getNotSelected(round)

  return (
    <PlayLayout>
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
            width={50}
            height={50}
            alt='bandera'
          />
          <Options availableQuestions={availableQuestions} />
        </>
      )}
    </PlayLayout>
  )
}

export default PlayPage
