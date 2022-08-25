import { useEffect, useState } from 'react'
import { useMainContext } from './useMainContext'
import confetti from 'canvas-confetti'

export const useMsgResult = () => {
  const [message, setMessage] = useState<string>('')
  const {
    configGame: { numberQuestions },
    score: { correct },
    setSpinner,
    setEmojiResult
  } = useMainContext()

  const rate = (correct * 100) / numberQuestions

  useEffect(() => {
    if (rate >= 80) {
      setMessage('¡Enhorabuena! Eres una máquina en geografía.')
      setEmojiResult('good')
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        })
      }, 3000)
      return
    }
    if (rate >= 50) {
      setMessage('Hay que practicar más...')
      setEmojiResult('mid')
      return
    }
    setMessage('Estás grave en geografía.')
    setEmojiResult('bad')
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false)
    }, 2000)
  }, [])

  return {
    message
  }
}
