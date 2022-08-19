import NextLink from 'next/link'

import { PlayLayout } from '../components/layouts'
import { Button, Keypad } from '../components/ui'
import { useMainContext } from '../hooks'
import { NumberQuestions } from '../interfaces'

const QuestionsPage = () => {
  const { configGame, setConfigGame } = useMainContext()

  function handleNumberQuestions(numberQuestions: NumberQuestions) {
    setConfigGame({ ...configGame, numberQuestions })
  }

  return (
    <PlayLayout>
      <Keypad>
        <NextLink href='/questions' passHref>
          <a onClick={() => handleNumberQuestions(10)}>
            <Button>10</Button>
          </a>
        </NextLink>
        <NextLink href='/questions' passHref>
          <a onClick={() => handleNumberQuestions(20)}>
            <Button>20</Button>
          </a>
        </NextLink>
      </Keypad>
    </PlayLayout>
  )
}

export default QuestionsPage
