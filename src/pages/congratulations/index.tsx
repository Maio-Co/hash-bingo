import UserIcon from '@/assets/icons/user.svg?react'
import TitleContainer from '@/context/title-context'
import DrawerContainer from '@/context/drawer-context'
import { useEffect } from 'react'

const Congratulations = () => {
  const { openDrawer } = DrawerContainer.useContainer()

  const { setTitle } = TitleContainer.useContainer()
  useEffect(() => {
    setTitle(
      <>
        <div className="absolute t-2 left-4">
          <UserIcon onClick={() => openDrawer()} />
        </div>
        <div className="mx-auto text-2xl font-bold">Congratulations</div>
      </>
    )
  }, [])

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="mt-10 mb-6 text-xl font-bold text-[#49454F]">Collect Reward</div>
      <div className="mb-12 text-3xl font-bold text-[#49454F]">Congratulations !</div>
      <div className="mb-4 text-sm">You’ve won</div>
      <div className="font-bold text-4xl text-[#E8C948]">100 USDT</div>

      <div className="mt-40 mb-10 p-3 rounded-xl border border-bg-dark text-primary">
        Please confirm to collect your reward. The amount will be transferred to your connected wallet.
      </div>

      <div className="w-full py-3 text-xl font-bold text-center text-white bg-secondary rounded-3xl">
        Confirm Collection
      </div>

    </div>
  )
}

export default Congratulations
