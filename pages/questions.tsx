import { PlayLayout } from '../components/layouts'
import { Keypad } from '../components/ui'
import { numberQuestions } from '../data'

const QuestionsPage = () => {
  return (
    <PlayLayout>
      <Keypad buttons={numberQuestions} />
    </PlayLayout>
  )
}

export default QuestionsPage
