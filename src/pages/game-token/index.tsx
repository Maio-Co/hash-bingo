import TitleContainer from '@/context/title-context'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import LeftIcon from '@/assets/icons/arrow-left.svg?react'
import BalancesContainer from '@/context/balances-context'



const GameToken = () => {
  const navigate = useNavigate()

  const { balances } = BalancesContainer.useContainer()

  const { setTitle } = TitleContainer.useContainer()
  useEffect(() => {
    setTitle(
      <>
        <div className="absolute t-2 left-4">
          <LeftIcon onClick={() => navigate('/')} />
        </div>
        <div className="mx-auto text-2xl font-bold">Game Token</div>
      </>
    )
  }, [])

  return (
    <div className="p-4">
      <div className="mb-4 p-4 rounded-2xl border-4 border-bg-dark bg-[#CCC0B2]">
        <div className="mb-2 font-bold text-xl text-primary">Balance</div>
        <div className="font-bold text-4xl">{ balances.balance } USDT</div>
      </div>

      <div className="mb-7 flex items-center gap-6">
        <div onClick={() => navigate('/withdraw')} className="py-3 w-1/2 bg-secondary font-semibold text-white text-center rounded-3xl">Withdraw</div>
        <div onClick={() => navigate('/deposit')} className="py-3 w-1/2 bg-primary-dark font-semibold text-white text-center rounded-3xl">Deposit</div>
      </div>

      {/* <div className="py-2 font-bold text-2xl text-primary border-b border-[#CCC0B2]">Transactions</div> */}

    </div>
  )
}

export default GameToken
