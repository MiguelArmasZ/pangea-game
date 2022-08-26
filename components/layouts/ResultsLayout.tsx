import Head from 'next/head'
import { ReactNode } from 'react'
import { useMainContext } from '../../hooks'

interface Props {
  children: ReactNode
}

export const ResultsLayout = ({ children }: Props) => {
  const {
    configGame: { numberQuestions },
    score: { correct }
  } = useMainContext()

  const rate = (correct * 100) / numberQuestions

  return (
    <>
      <Head>
        <title>Ratio de aciertos {rate.toFixed(0)}%</title>
      </Head>
      <main className='results-layout fade'>{children}</main>
    </>
  )
}
