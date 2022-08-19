import { createContext } from 'react'
import { ConfigGame } from '../interfaces'

interface MainContextTypes {
  configGame: ConfigGame
  setConfigGame: (value: ConfigGame) => void
}

export const MainContext = createContext({} as MainContextTypes)
