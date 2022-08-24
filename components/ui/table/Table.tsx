import { useMainContext } from '../../../hooks'
import css from './Table.module.css'

export const Table = () => {
  const {
    configGame: { numberQuestions },
    score: { correct, incorrect }
  } = useMainContext()

  const rate = (correct * 100) / numberQuestions
  const level = rate >= 80 ? css.High : rate >= 50 ? css.Mid : css.Low

  return (
    <table className={css.Table}>
      <thead>
        <tr>
          <th>número de preguntas</th>
          <td>{numberQuestions}</td>
        </tr>
        <tr>
          <th>aciertos</th>
          <td className={css.Correct}>{correct}</td>
        </tr>
        <tr>
          <th>fallos</th>
          <td className={css.Inorrect}>{incorrect}</td>
        </tr>
        <tr>
          <th>ratio de aciertos</th>
          <td className={`${css.Rate} ${level}`}>
            {rate.toFixed(2)}%
          </td>
        </tr>
      </thead>
    </table>
  )
}
