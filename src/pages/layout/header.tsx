import MenuIcon from '@/assets/icons/menu.svg?react'
import LeftIcon from '@/assets/icons/arrow-left.svg?react'
import { useLocation, useNavigate } from 'react-router'
import TitleContainer from '@/context/title-context'

const Header = ({ openDrawer }: any) => {
  const location = useLocation()
  const navigate = useNavigate()
  const isIndex = location.pathname === '/'

  const { title } = TitleContainer.useContainer()

  return (
    <header className="relative w-full h-16 flex items-center bg-bg-dark">
      <div className="absolute t-2 left-1">
        { isIndex ? <MenuIcon onClick={openDrawer} /> : <LeftIcon onClick={() => navigate(-1)} /> }
      </div>
      <div className="mx-auto text-2xl font-bold">{ title }</div>
    </header>
  )
}

export default Header
