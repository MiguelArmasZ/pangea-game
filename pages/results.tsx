import { useEffect } from 'react'
import { ResultsLayout } from '../components/layouts'
import { Heading, Spinner, Table } from '../components/ui'
import { useMainContext } from '../hooks'

const ResultsPage = () => {
  const { spinner, setSpinner } = useMainContext()

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false)
    }, 2000)
  }, [])

  return (
    <ResultsLayout>
      {spinner ? (
        <Spinner />
      ) : (
        <section
          style={{ display: 'grid', gap: '2rem' }}
          className='fade'
        >
          <Heading>resultados</Heading>
          <Table />
        </section>
      )}
    </ResultsLayout>
  )
}

export default ResultsPage
