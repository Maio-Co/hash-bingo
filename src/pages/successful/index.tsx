import TitleContainer from '@/context/title-context'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Successful = () => {
  const navigate = useNavigate()

  const { setTitle } = TitleContainer.useContainer()
  useEffect(() => {
    setTitle(
      <>
      </>
    )
  }, [])

  return (
    <div className=" w-screen h-screen flex flex-col justify-center items-center">
      <div className="mt-[-160px] mb-4 text-4xl text-primary font-bold">Successful ! </div>
      <div className="rounded-3xl bg-secondary font-bold text-white py-3 px-8" onClick={() => navigate('/')}>Confirm</div>
    </div>
  )
}

export default Successful
