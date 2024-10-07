import DrawerContainer from '@/context/drawer-context'
import TitleContainer from '@/context/title-context'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import MenuIcon from '@/assets/icons/menu.svg?react'

const Successful = () => {
  const navigate = useNavigate()

  const { openDrawer } = DrawerContainer.useContainer()

  const { setTitle } = TitleContainer.useContainer()
  useEffect(() => {
    setTitle(
      <>
        <div className="absolute t-2 left-4">
          <MenuIcon onClick={() => openDrawer()} />
        </div>
        <div className="mx-auto text-2xl font-bold">Successful</div>
      </>
    )
  }, [])

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="mt-[-160px] mb-4 text-4xl text-primary font-bold">Successful ! </div>
      <div className="rounded-3xl bg-secondary font-bold text-white py-3 px-8" onClick={() => navigate('/')}>Confirm</div>
    </div>
  )
}

export default Successful
