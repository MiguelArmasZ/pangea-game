import { useMainContext } from './'

export const useConfigGame = () => {
  const { configGame, setConfigGame } = useMainContext()

  function handleConfigGame(key: string, value: string | number) {
    setConfigGame({ ...configGame, [key]: value })
  }

  return handleConfigGame
}
