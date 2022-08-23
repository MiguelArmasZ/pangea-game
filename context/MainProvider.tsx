import { ReactNode, useState } from 'react'
import { ConfigGame, Country, Score } from '../interfaces'
import {
  MainContext,
  CONFIG_GAME_INITIAL_STATE,
  SCORE_INITIAL_STATE
} from './'

interface Props {
  children: ReactNode
}

export const MainProvider = ({ children }: Props) => {
  const [configGame, setConfigGame] = useState<ConfigGame>(
    CONFIG_GAME_INITIAL_STATE
  )
  const [round, setRound] = useState<Country[]>([])
  const [score, setScore] = useState<Score>(SCORE_INITIAL_STATE)

  return (
    <MainContext.Provider
      value={{
        configGame,
        setConfigGame,

        round,
        setRound,

        score,
        setScore
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
