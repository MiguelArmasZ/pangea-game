import css from './Waves.module.css'

interface Props {
  waveType: 1 | 2
}

export const Waves = ({ waveType }: Props) => {
  return (
    <>
      {waveType === 1 && (
        <svg
          className={css.Waves}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#15d'
            fillOpacity='0.5'
            d='M0,96L48,90.7C96,85,192,75,288,106.7C384,139,480,213,576,229.3C672,245,768,203,864,181.3C960,160,1056,160,1152,144C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
      )}
      {waveType === 2 && (
        <svg
          className={css.Waves}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#ff6900'
            fillOpacity='0.5'
            d='M0,128L48,160C96,192,192,256,288,250.7C384,245,480,171,576,117.3C672,64,768,32,864,32C960,32,1056,64,1152,90.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
      )}
    </>
  )
}