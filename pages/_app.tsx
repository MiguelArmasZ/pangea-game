import '../styles/index.css'
import type { AppProps } from 'next/app'
import { MainProvider } from '../context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  )
}

export default MyApp
