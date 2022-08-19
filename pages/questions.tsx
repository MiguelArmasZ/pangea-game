import NextLink from 'next/link'

import { PlayLayout } from '../components/layouts'
import { Button, Keypad } from '../components/ui'

const QuestionsPage = () => {
  return (
    <PlayLayout>
      <Keypad>
        <NextLink href='/questions' passHref>
          <a>
            <Button>10</Button>
          </a>
        </NextLink>
        <NextLink href='/questions' passHref>
          <a>
            <Button>20</Button>
          </a>
        </NextLink>
      </Keypad>
    </PlayLayout>
  )
}

export default QuestionsPage
