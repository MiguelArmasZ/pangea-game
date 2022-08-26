import Image from 'next/image'
import { ResultsLayout } from '../components/layouts'
import {
  AgainBtn,
  Heading,
  Spinner,
  Table,
  Paragraph
} from '../components/ui'
import {
  useMainContext,
  useMsgResult,
  useProtectRoutes
} from '../hooks'
import css from '../styles/pages/Results.module.css'

const ResultsPage = () => {
  const { spinner, emojiResult } = useMainContext()
  const { message } = useMsgResult()
  useProtectRoutes()

  return (
    <ResultsLayout>
      {spinner ? (
        <Spinner />
      ) : (
        <section
          style={{ display: 'grid', gap: '2.5rem' }}
          className='fade'
        >
          <Heading>resultados</Heading>
          <Table />
          <Paragraph sx={css.Msg}>{message}</Paragraph>
          <Image
            priority
            src={`/emojis/${emojiResult}.png`}
            alt='emoji'
            width={50}
            height={50}
          />
          <AgainBtn />
        </section>
      )}
    </ResultsLayout>
  )
}

export default ResultsPage
