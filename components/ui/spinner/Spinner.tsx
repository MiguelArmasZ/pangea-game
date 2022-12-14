import css from './Spinner.module.css'

export const Spinner = () => {
  return (
    <div className={`${css.spinner} fade`}>
      <div className={css.dot1}></div>
      <div className={css.dot2}></div>
    </div>
  )
}
