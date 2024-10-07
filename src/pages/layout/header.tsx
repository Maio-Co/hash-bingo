import MenuIcon from '@/assets/icons/menu.svg?react'
import { useLocation } from 'react-router'
import TitleContainer from '@/context/title-context'

const Header = ({ openDrawer }: any) => {

  const location = useLocation()
  const isIndex = location.pathname === '/'

  const { title } = TitleContainer.useContainer()

  return (
    <header className="relative w-full h-[64px] flex items-center bg-bg-dark">
      { isIndex ?
        <>
          <div className="absolute t-2 left-4">
            <MenuIcon onClick={openDrawer} />
          </div>
          <div className="mx-auto text-2xl font-bold">Bingo Card</div>
        </>
        : title
      }
    </header>
  )
}

export default Header
