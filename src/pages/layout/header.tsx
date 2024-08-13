import MenuIcon from '@/assets/icons/menu.svg?react'

const Header = () => {

  return (
    <header className="relative w-full h-16 flex items-center bg-bg-dark">
      <div className="absolute t-2 left-1">
        <MenuIcon />
      </div>
      <div className="mx-auto text-lg">Logo</div>
    </header>
  )
}

export default Header
