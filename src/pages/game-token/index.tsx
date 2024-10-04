import TitleContainer from '@/context/title-context'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import LeftIcon from '@/assets/icons/arrow-left.svg?react'
import BalancesContainer from '@/context/balances-context'
import { APIRequest } from '@/service/api-request'
import LoadingContainer from '@/context/loading-context'

const GameToken = () => {
  const navigate = useNavigate()

  const { load, unload } = LoadingContainer.useContainer()

  const { balances, decimals, formatAmount } = BalancesContainer.useContainer()

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


  const [transactions, setTransactions] = useState([] as any[])
  const getTransactions = async () => {
    load()
    const res = await APIRequest.get('/balance/history', { params: { page: 1, pageSize: 10 } }).then(res => res.data.balanceHistory).catch(() => [])
    setTransactions(res)
    unload()
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <div className="p-4">
      <div className="mb-4 p-4 rounded-2xl border-4 border-bg-dark bg-[#CCC0B2]">
        <div className="mb-2 font-bold text-xl text-primary">Balance</div>
        <div className="font-bold text-4xl">{ formatAmount(Number(balances.balance), decimals) } Game Points</div>
      </div>

      <div className="mb-7 flex items-center gap-6">
        <div onClick={() => navigate('/withdraw')} className="py-3 w-1/2 bg-secondary font-semibold text-white text-center rounded-3xl">Withdraw</div>
        <div onClick={() => navigate('/deposit')} className="py-3 w-1/2 bg-primary-dark font-semibold text-white text-center rounded-3xl">Deposit</div>
      </div>

      <div className="py-2 font-bold text-2xl text-primary border-b border-[#CCC0B2]">Transactions</div>

      <section className="py-4">
        { transactions.map(item =>
          <div key={item.id} className="p-2 rounded-md flex items-center text-primary odd:bg-[#8B736133]">
            <span>
              {item.amount >= 0 ? 'Deposit' : 'Withdraw'}
            </span>

            <span className="ml-auto" style={{  color: item.amount > 0 ? '#E5935A' : '' }}>
              {`${item.amount > 0 ? '+' : ''}${formatAmount(item.amount, decimals)}`}
            </span>

          </div>
        ) }

      </section>

    </div>
  )
}

export default GameToken
