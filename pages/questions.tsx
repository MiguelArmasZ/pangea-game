import { PlayLayout } from '../components/layouts'
import { Keypad, Paragraph } from '../components/ui'
import { numberQuestions } from '../data'

const QuestionsPage = () => {
  return (
    <PlayLayout>
      <Paragraph>elíge el número de preguntas</Paragraph>
      <Keypad buttons={numberQuestions} />
    </PlayLayout>
  )
}

export default QuestionsPage
