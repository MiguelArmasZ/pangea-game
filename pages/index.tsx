import NextLink from 'next/link'
import { HomeLayout } from '../components/layouts'
import {
  Button,
  Developed,
  Keypad,
  Paragraph,
  Title
} from '../components/ui'
import { useMainContext } from '../hooks'
import { Modality } from '../interfaces'
import css from '../styles/pages/Home.module.css'

const HomePage = () => {
  const { configGame, setConfigGame } = useMainContext()

  function handleModality(modality: Modality) {
    setConfigGame({ ...configGame, modality })
  }

  return (
    <HomeLayout>
      <Title sx={css.Title} />
      <Paragraph sx={css.Slogan}>
        aprende geografía mientras te diviertes
      </Paragraph>
      <Paragraph>elíge una modalidad</Paragraph>

      <Keypad>
        <NextLink href='/questions' passHref>
          <a onClick={() => handleModality('capitals')}>
            <Button>capitales</Button>
          </a>
        </NextLink>
        <NextLink href='/questions' passHref>
          <a onClick={() => handleModality('flags')}>
            <Button>banderas</Button>
          </a>
        </NextLink>
      </Keypad>

      <Developed />
    </HomeLayout>
  )
}

export default HomePage
