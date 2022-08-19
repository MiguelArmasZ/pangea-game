import { PlayLayout } from '../components/layouts'
import { Button, Paragraph } from '../components/ui'
import { useMainContext } from '../hooks'

const PlayPage = () => {
  const { round } = useMainContext()

  return (
    <PlayLayout>
      <Paragraph>¿cúal es la capital de {round[0].name}?</Paragraph>
      <div>
        <Button>{round[0].capital}</Button>
        {round
          .map(({ capital }) => (
            <Button key={capital}>{capital}</Button>
          ))
          .slice(-3, round.length)}
      </div>
    </PlayLayout>
  )
}

export default PlayPage
