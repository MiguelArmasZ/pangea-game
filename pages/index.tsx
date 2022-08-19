import NextLink from 'next/link'
import { HomeLayout } from '../components/layouts'
import {
  Button,
  Developed,
  Keypad,
  Paragraph,
  Title
} from '../components/ui'
import css from '../styles/pages/Home.module.css'

const HomePage = () => {
  return (
    <HomeLayout>
      <Title sx={css.Title} />
      <Paragraph sx={css.Slogan}>
        aprende geografía mientras te diviertes
      </Paragraph>
      <Paragraph>elíge una modalidad</Paragraph>

      <Keypad>
        <NextLink href='/questions' passHref>
          <a>
            <Button>capitales</Button>
          </a>
        </NextLink>
        <NextLink href='/questions' passHref>
          <a>
            <Button>banderas</Button>
          </a>
        </NextLink>
      </Keypad>

      <Developed />
    </HomeLayout>
  )
}

export default HomePage
