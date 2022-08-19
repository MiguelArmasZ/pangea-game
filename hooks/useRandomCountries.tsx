import { useEffect } from 'react'
import { countries } from '../data'
import { getRandomCountries } from '../helpers'
import { useMainContext } from './'

export const useRandomCountries = () => {
  const { setRound, configGame } = useMainContext()
  const { numberQuestions } = configGame

  return useEffect(() => {
    if (numberQuestions > 0) {
      setRound(getRandomCountries(countries, numberQuestions))
    }
  }, [configGame])
}
