import { useEffect } from 'react'
import { HomeLayout } from '../components/layouts'
import { BackBtn, Spinner } from '../components/ui'
import { useMainContext } from '../hooks'

const ResultsPage = () => {
  const { spinner, setSpinner } = useMainContext()

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false)
    }, 2000)
  }, [])

  return (
    <HomeLayout>
      {spinner ? <Spinner /> : <h1>soy el resultado</h1>}

      <BackBtn />
    </HomeLayout>
  )
}

export default ResultsPage
