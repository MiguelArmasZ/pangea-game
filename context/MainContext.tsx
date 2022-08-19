import { createContext } from 'react'
import { ConfigGame, Country } from '../interfaces'

interface MainContextTypes {
  configGame: ConfigGame
  setConfigGame: (value: ConfigGame) => void

  round: Country[]
  setRound: (value: Country[]) => void
}

export const MainContext = createContext({} as MainContextTypes)
