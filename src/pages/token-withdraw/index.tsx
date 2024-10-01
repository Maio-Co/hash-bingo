import TitleContainer from '@/context/title-context'
import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import LeftIcon from '@/assets/icons/arrow-left.svg?react'
import USDTIcon from '@/assets/icons/usdt.svg?react'
import TextField from '@mui/material/TextField'
import BalancesContainer from '@/context/balances-context'
import LoginContainer from '@/context/login-context'

const Withdraw = () => {
  const navigate = useNavigate()
  const { setTitle } = TitleContainer.useContainer()
  const { balances } = BalancesContainer.useContainer()

  useEffect(() => {
    setTitle(
      <>
        <div className="absolute t-2 left-4">
          <LeftIcon onClick={() => navigate('/game-token')} />
        </div>
        <div className="mx-auto text-2xl font-bold">Withdraw</div>
      </>
    )
  }, [])

  // userinfo
  const { address } = LoginContainer.useContainer()

  // amount
  const [amount, setAmount] = useState('')
  const onChangeAmount = (event: ChangeEvent<HTMLInputElement>) => setAmount(event.target.value)

  // Withdraw
  const withdrawToken = async (address: string, amount: string) => {
    if (!address) return
    console.log(address, amount)
  }

  return (
    <div className="p-4 h-[calc(100vh-144px)] flex flex-col">
      <div className="mb-6 flex flex-col items-center">
        <USDTIcon className="mb-2" />
        <div className="font-bold text-2xl text-primary">USDT</div>
      </div>

      <TextField label="Amount" variant="outlined" className="!mb-2 w-full" value={amount} onChange={onChangeAmount} />
      <div className="mb-16 px-4">Balance: { balances.balance } USDT</div>

      <div className="mb-4 p-3 border border-[#CCC0B2] text-primary rounded-2xl">
        Fee：0.00005 USDT
      </div>

      <div className="p-3 border border-[#CCC0B2] text-primary rounded-2xl">
        Please double check the withdrawal amount. Once the transaction is confirmed, it cannot be reversed.
      </div>

      <div
        onClick={() => withdrawToken(address || '', amount)}
        className="py-4 mt-auto mb-10 mx-auto w-1/2 text-center bg-secondary text-white font-bold rounded-3xl"
      >
        CONFIRM
      </div>
    </div>
  )
}

export default Withdraw
