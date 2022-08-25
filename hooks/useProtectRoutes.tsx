import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useMainContext } from './useMainContext'

export const useProtectRoutes = () => {
  const {
    configGame: { modality }
  } = useMainContext()
  const { push } = useRouter()

  useEffect(() => {
    if (!modality) {
      push('/')
    }
  }, [])
}
