import { PlayLayout } from '../components/layouts'
import { Options, Paragraph } from '../components/ui'
import { getNotSelected } from '../helpers'
import { useMainContext } from '../hooks'

const PlayPage = () => {
  const { round } = useMainContext()
  const availableQuestions = getNotSelected(round)

  return (
    <PlayLayout>
      <Paragraph>¿cúal es la capital de {round[0].name}?</Paragraph>
      <Options availableQuestions={availableQuestions} />
    </PlayLayout>
  )
}

export default PlayPage
