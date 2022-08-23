import { useMainContext } from './useMainContext'

export const useReply = () => {
  const { round, setRound, score, setScore } = useMainContext()
  const [correct] = round
  const { name: countryName } = correct

  const randomOrder = Math.floor(Math.random() * 100)

  function handleReply(event: any) {
    const reply = event.target.name

    setRound(round.slice(1, round.length))

    if (reply === countryName) {
      return setScore({ ...score, correct: score.correct + 1 })
    }

    if (reply !== countryName) {
      return setScore({ ...score, incorrect: score.incorrect + 1 })
    }
  }

  return {
    randomOrder,
    handleReply
  }
}
