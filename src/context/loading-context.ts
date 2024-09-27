import { useState } from 'react'
import { createContainer } from 'unstated-next'


const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false)
  const load = () => setIsLoading(true)
  const unload = () => setIsLoading(false)

  return { isLoading, load, unload }
}

const LoadingContainer = createContainer(useLoading)

export default LoadingContainer
