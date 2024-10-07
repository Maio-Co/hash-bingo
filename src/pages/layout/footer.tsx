import { useAuthCore } from '@particle-network/auth-core-modal'
import WalletIcon from '@/assets/icons/wallet.svg?react'
import HistoryIcon from '@/assets/icons/history.svg?react'
import AppIcon from '@/assets/icons/app.svg?react'
import { useNavigate } from 'react-router'

const Footer = () => {
  const { openWallet } = useAuthCore()
  const navigate = useNavigate()

  return (
    <div className="px-2 h-[80px] flex gap-4 bg-bg-dark">
      <div className="py-6 w-1/3" onClick={() => openWallet({ topMenuType: 'close' })}>
        <WalletIcon className="mx-auto mb-[.2rem] w-10 h-10" />
        <div className="text-center text-primary text-sm font-bold">Wallet</div>
      </div>
      <div className="py-6 w-1/3" onClick={() => navigate('/')}>
        <AppIcon className="mt-[.3rem] mb-[.4rem] mx-auto w-8 h-8" />
        <div className="text-center text-primary text-sm font-bold">Bingo</div>
      </div>
      <div className="py-6 w-1/3" onClick={() => navigate('/history')}>
        <HistoryIcon className="mx-auto mb-[.2rem] w-10 h-10" />
        <div className="text-center text-primary text-sm font-bold">History</div>
      </div>

    </div>
  )
}

export default Footer
