import { ReactNode, useState } from 'react'
import {
  ConfigGame,
  Country,
  Score,
  Confirmation
} from '../interfaces'
import {
  MainContext,
  CONFIG_GAME_INITIAL_STATE,
  SCORE_INITIAL_STATE,
  CONFIRMATION_INITIAL_STATE
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

  const [feedbackReply, setFeedbackReply] = useState<0 | 1 | 2>(0)

  const [spinner, setSpinner] = useState<boolean>(true)

  const [emojiResult, setEmojiResult] = useState<string>('')

  const [confirmation, setConfirmation] = useState<Confirmation>(
    CONFIRMATION_INITIAL_STATE
  )

  return (
    <MainContext.Provider
      value={{
        configGame,
        setConfigGame,

        round,
        setRound,

        score,
        setScore,

        feedbackReply,
        setFeedbackReply,

        spinner,
        setSpinner,

        emojiResult,
        setEmojiResult,

        confirmation,
        setConfirmation
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
