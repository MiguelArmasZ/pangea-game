import { createContext } from 'react'
import { ConfigGame, Country, Score } from '../interfaces'

interface MainContextTypes {
  configGame: ConfigGame
  setConfigGame: (value: ConfigGame) => void

  round: Country[]
  setRound: (value: Country[]) => void

  score: Score
  setScore: (value: Score) => void
}

export const MainContext = createContext({} as MainContextTypes)
