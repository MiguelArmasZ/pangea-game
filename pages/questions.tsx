import { PlayLayout } from '../components/layouts'
import { Keypad } from '../components/ui'
import { numberQuestions } from '../data'
// import { useMainContext } from '../hooks'
// import { NumberQuestions } from '../interfaces'

const QuestionsPage = () => {
  // const { configGame, setConfigGame } = useMainContext()

  // function handleNumberQuestions(numberQuestions: NumberQuestions) {
  //   setConfigGame({ ...configGame, numberQuestions })
  // }

  return (
    <PlayLayout>
      <Keypad buttons={numberQuestions} />
    </PlayLayout>
  )
}

export default QuestionsPage
