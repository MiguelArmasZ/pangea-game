import { useState } from 'react'
import { useMainContext } from './'

export const useConfigGame = () => {
  const [isActive, setIsActive] = useState<null | number>(null)
  const { configGame, setConfigGame } = useMainContext()

  function handleConfigGame(key: string, value: string | number) {
    setConfigGame({ ...configGame, [key]: value })
  }

  function setActiveBtn(index: number) {
    setIsActive(index)
  }

  return { configGame, handleConfigGame, isActive, setActiveBtn }
}
