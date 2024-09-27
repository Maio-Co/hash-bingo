import MenuIcon from '@/assets/icons/menu.svg?react'
import { useLocation } from 'react-router'
import TitleContainer from '@/context/title-context'

const Header = ({ openDrawer }: any) => {
  const location = useLocation()
  const isIndex = location.pathname === '/'

  const { title } = TitleContainer.useContainer()

  return (
    <header className="relative w-full h-16 flex items-center bg-bg-dark">
      { isIndex ?
        <>
          <div className="absolute t-2 left-1">
            <MenuIcon onClick={openDrawer} />
          </div>
          <div className="mx-auto text-2xl font-bold">Logo</div>
        </>
        : title
      }
    </header>
  )
}

export default Header
