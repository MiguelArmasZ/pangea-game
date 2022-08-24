import { createContext } from 'react'
import { ConfigGame, Country, Score } from '../interfaces'

interface MainContextTypes {
  configGame: ConfigGame
  setConfigGame: (value: ConfigGame) => void

  round: Country[]
  setRound: (value: Country[]) => void

  score: Score
  setScore: (value: Score) => void

  feedbackReply: 0 | 1 | 2
  setFeedbackReply: (value: 0 | 1 | 2) => void

  spinner: boolean
  setSpinner: (value: boolean) => void
}

export const MainContext = createContext({} as MainContextTypes)
