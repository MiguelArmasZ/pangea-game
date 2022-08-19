import { ReactNode, useState } from 'react'
import { ConfigGame } from '../interfaces'
import { MainContext, CONFIG_GAME_INITIAL_STATE } from './'

interface Props {
  children: ReactNode
}

export const MainProvider = ({ children }: Props) => {
  const [configGame, setConfigGame] = useState<ConfigGame>(
    CONFIG_GAME_INITIAL_STATE
  )

  return (
    <MainContext.Provider
      value={{
        configGame,
        setConfigGame
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
