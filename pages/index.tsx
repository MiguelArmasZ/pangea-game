import { HomeLayout } from '../components/layouts'
import {
  Developed,
  Keypad,
  Paragraph,
  Title,
  Waves
} from '../components/ui'
import { modalityConfig } from '../data'
import css from '../styles/pages/Home.module.css'

const HomePage = () => {
  return (
    <HomeLayout>
      <Title sx={css.Title} />
      <Paragraph sx={css.Slogan}>
        aprende geografía mientras te diviertes
      </Paragraph>
      <Paragraph>elíge una modalidad</Paragraph>
      <Keypad buttons={modalityConfig} />
      <Developed />
      {/* <Waves waveType='wave-1' />
      <Waves waveType='wave-2' />
    <Waves waveType='wave-3' /> */}
      <Waves />
    </HomeLayout>
  )
}

export default HomePage
