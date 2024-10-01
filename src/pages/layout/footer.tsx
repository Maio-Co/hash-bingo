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
      <div className="py-6 w-1/3" onClick={() => openWallet()}>
        <WalletIcon className="mx-auto w-10 h-10" />
      </div>
      <div className="py-6 w-1/3" onClick={() => navigate('/')}>
        <AppIcon className="mt-1 mx-auto w-8 h-8" />
      </div>
      <div className="py-6 w-1/3" onClick={() => navigate('/history')}>
        <HistoryIcon className="mx-auto w-10 h-10" />
      </div>

    </div>
  )
}

export default Footer
