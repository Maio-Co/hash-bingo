import { useState } from 'react'
import { createContainer } from 'unstated-next'

const useTitle = () => {
  const [title, setTitle] = useState('')

  return { title, setTitle }
}

const TitleContainer = createContainer(useTitle)

export default TitleContainer
