import css from './Table.module.css'

export const Table = () => {
  return (
    <table className={css.Table}>
      <thead>
        <tr>
          <th>número de preguntas</th>
          <td>20</td>
        </tr>
        <tr>
          <th>aciertos</th>
          <td>12</td>
        </tr>
        <tr>
          <th>fallos</th>
          <td>8</td>
        </tr>
        <tr>
          <th>ratio</th>
          <td>75%</td>
        </tr>
      </thead>
    </table>
  )
}
