import { useRouter } from 'next/router'
import { Score } from '../interfaces'
import { useMainContext } from './useMainContext'

export const useReply = () => {
  const { round, setRound, score, setScore, setFeedbackReply } =
    useMainContext()
  const [correctReply] = round
  const { name: countryName } = correctReply

  const { push } = useRouter()

  function handleReply(event: any) {
    const reply = event.target.name

    const nextQuestion = () => setRound(round.slice(1, round.length))

    const changeScore = (pointKind: string) => {
      setTimeout(() => {
        nextQuestion()
        setScore({
          ...score,
          [pointKind]: score[pointKind as keyof Score] + 1
        })
        setFeedbackReply(0)

        if (score.remainingQuestions === 1) {
          push('/results')
        }
      }, 500)
    }

    if (reply === countryName) {
      setFeedbackReply(1)
      changeScore('correct')
    }

    if (reply !== countryName) {
      setFeedbackReply(2)
      changeScore('incorrect')
    }
  }

  return {
    handleReply
  }
}
