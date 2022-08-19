import { useEffect } from 'react'
import { PlayLayout } from '../components/layouts'
import { Button, Paragraph } from '../components/ui'
import { useMainContext } from '../hooks'

const PlayPage = () => {
  const { round, setRound, configGame } = useMainContext()

  const { numberQuestions } = configGame

  useEffect(() => {
    if (numberQuestions > 0) {
      setRound([
        { name: 'brasil', capital: 'brasilia', flag: 'brasil' },
        { name: 'bulgaria', capital: 'sofía', flag: 'bulgaria' },
        { name: 'burundi', capital: 'gitega', flag: 'burundi' },
        { name: 'armenia', capital: 'ereván', flag: 'armenia' },
        { name: 'australia', capital: 'canberra', flag: 'australia' },
        { name: 'austria', capital: 'viena', flag: 'austria' },
        { name: 'azerbaiyán', capital: 'bakú', flag: 'azerbaiyan' }
      ])
    }
  }, [configGame])

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
