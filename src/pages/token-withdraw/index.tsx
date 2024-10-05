import TitleContainer from '@/context/title-context'
import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import LeftIcon from '@/assets/icons/arrow-left.svg?react'
// import USDTIcon from '@/assets/icons/usdt.svg?react'
import TextField from '@mui/material/TextField'
import BalancesContainer from '@/context/balances-context'
import LoginContainer from '@/context/login-context'
import { APIRequest } from '@/service/api-request'
import LoadingContainer from '@/context/loading-context'
import { Dialog, DialogTitle, DialogContent } from '@mui/material'
import toast from 'react-hot-toast'

const Withdraw = () => {
  const navigate = useNavigate()
  const { load, unload } = LoadingContainer.useContainer()
  const { setTitle } = TitleContainer.useContainer()
  const { balances, getBalance, decimals, parseAmount, formatAmount } = BalancesContainer.useContainer()

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

    load()
    const data = { amount: parseAmount(Number(amount), decimals) }
    const res = await APIRequest.post('/withdraw', data)
      .then(res => res.data)
      .catch(() => { toast.error('Withdraw Failed') })

    unload()

    if (res.tx) {
      navigate('/successful')
      getBalance()
      onClose()
    }
  }

  // dialog
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)

  return (
    <div className="p-4 h-[calc(100dvh-144px)] flex flex-col">
      <div className="mb-6 flex flex-col items-center">
        {/* <USDTIcon className="mb-2" /> */}
        <div className="font-bold text-2xl text-primary">Game Points</div>
      </div>

      <TextField label="Amount" variant="outlined" className="!mb-2 w-full" value={amount} onChange={onChangeAmount} />
      <div className="mb-16 px-4">Available Balance: { formatAmount(Number(balances.balance), decimals) } Game Points</div>

      <div className="mb-4 p-3 border border-[#CCC0B2] text-primary rounded-2xl">
        Fee：0.00005 Game Points
      </div>

      <div className="p-3 border border-[#CCC0B2] text-primary rounded-2xl">
        Please double check the withdrawal amount. Once the transaction is confirmed, it cannot be reversed.
      </div>

      <div
        onClick={() => setIsOpen(true)}
        className="py-4 mt-auto mb-10 mx-auto w-1/2 text-center bg-secondary text-white font-bold rounded-3xl"
      >
        CONFIRM
      </div>


      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>
          <div className="font-bold text-2xl text-center">Withdraw</div>
        </DialogTitle>

        <DialogContent>
          <div className="mb-4 text-lg">Withdraw Amount：{amount} Game Points</div>

          <div className="mb-10 text-lg">Fee：0.00 Game Points</div>

          <div className="flex gap-2">
            <div
              onClick={onClose}
              className="py-2 w-1/2 rounded-3xl border border-secondary text-secondary text-center font-bold"
            >
              Back
            </div>
            <div
              onClick={() => withdrawToken(address || '', amount)}
              className="py-2 w-1/2 rounded-3xl bg-secondary text-white text-center font-bold"
            >
              Confirm
            </div>
          </div>
        </DialogContent>

      </Dialog>
    </div>
  )
}

export default Withdraw
