import { PlayLayout } from '../components/layouts'
import { BackBtn, Keypad, Paragraph } from '../components/ui'
import { numberQuestionsConfig } from '../data'
import { useProtectRoutes, useRandomCountries } from '../hooks'

const QuestionsPage = () => {
  useRandomCountries()
  useProtectRoutes()

  return (
    <PlayLayout>
      <Paragraph>elíge el número de preguntas</Paragraph>
      <Keypad buttons={numberQuestionsConfig} />
      <BackBtn />
    </PlayLayout>
  )
}

export default QuestionsPage
