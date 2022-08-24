import { ConfigGame, Score } from '../interfaces'

export const CONFIG_GAME_INITIAL_STATE: ConfigGame = {
  modality: '',
  numberQuestions: 0
}

export const SCORE_INITIAL_STATE: Score = {
  correct: 0,
  incorrect: 0,
  remainingQuestions: -1
}
