import React from 'react'
import { useMainContext } from '../../../hooks'
import css from './Score.module.css'

export const Score = () => {
  const {
    score: { remainingQuestions }
  } = useMainContext()

  return (
    <ul className={css.Score}>
      <li>{remainingQuestions}</li>
    </ul>
  )
}
