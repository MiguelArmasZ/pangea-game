import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getNotSelected } from '../helpers'
import { Country } from '../interfaces'
import { useMainContext } from './useMainContext'

export const useGameFlow = () => {
  const [availableQuestions, setAvailableQuestions] = useState<
    Country[]
  >([])

  const { round, score, setScore } = useMainContext()

  const { push } = useRouter()

  useEffect(() => {
    setAvailableQuestions(getNotSelected(round))
    setScore({ ...score, remainingQuestions: round.length - 1 })
  }, [round])

  useEffect(() => {
    if (score.remainingQuestions === 0) {
      setTimeout(() => {
        push('/results')
      }, 1000)
    }
  }, [score.remainingQuestions])

  return { availableQuestions }
}
