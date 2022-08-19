import { ReactNode, useState } from 'react'
import { ConfigGame, Country } from '../interfaces'
import { MainContext, CONFIG_GAME_INITIAL_STATE } from './'

interface Props {
  children: ReactNode
}

export const MainProvider = ({ children }: Props) => {
  const [configGame, setConfigGame] = useState<ConfigGame>(
    CONFIG_GAME_INITIAL_STATE
  )
  const [round, setRound] = useState<Country[]>([])

  return (
    <MainContext.Provider
      value={{
        configGame,
        setConfigGame,

        round,
        setRound
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
