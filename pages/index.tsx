import { HomeLayout } from '../components/layouts'
import { Developed, Keypad, Paragraph, Title } from '../components/ui'
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
    </HomeLayout>
  )
}

export default HomePage
