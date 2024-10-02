import { useState } from 'react'
import { createContainer } from 'unstated-next'

const useDrawer = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const openDrawer = () => setIsOpenDrawer(true)
  const closeDrawer = () => setIsOpenDrawer(false)

  return { isOpenDrawer, openDrawer, closeDrawer }
}

const DrawerContainer = createContainer(useDrawer)

export default DrawerContainer
