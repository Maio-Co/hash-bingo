import TitleContainer from '@/context/title-context'
import { useEffect } from 'react'

const GameToken = () => {

  const { setTitle } = TitleContainer.useContainer()
  useEffect(() => { setTitle('Game Token') }, [])

  return (
    <div>GameToken</div>
  )
}

export default GameToken
