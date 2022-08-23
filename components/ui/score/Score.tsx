import React from 'react'
import { useMainContext } from '../../../hooks'
import css from './Score.module.css'

export const Score = () => {
  const {
    score: { correct, incorrect, remainingQuestions }
  } = useMainContext()

  return (
    <ul className={css.Score}>
      <li>{correct}</li>
      <li>{remainingQuestions}</li>
      <li>{incorrect}</li>
    </ul>
  )
}
