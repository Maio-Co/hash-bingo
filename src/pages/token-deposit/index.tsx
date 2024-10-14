import TitleContainer from '@/context/title-context'
import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import LeftIcon from '@/assets/icons/arrow-left.svg?react'
import LoginContainer from '@/context/login-context'
import { PublicKey, Transaction} from '@solana/web3.js'
import { Program, AnchorProvider } from '@coral-xyz/anchor'
// import idl from '@/global/bingo_game.json'
import bs58 from 'bs58'
import { APIRequest } from '@/service/api-request'
import { useSolana } from '@particle-network/auth-core-modal'
import { Dialog, DialogTitle, DialogContent } from '@mui/material'
import LoadingContainer from '@/context/loading-context'
import { connection } from '@/global'
import toast from 'react-hot-toast'
import BalancesContainer from '@/context/balances-context'
import { BN } from 'bn.js'

const Deposit = () => {
  const { load, unload } = LoadingContainer.useContainer()
  const { balances, getBalance, decimals, parseAmount, formatAmount } = BalancesContainer.useContainer()

  const navigate = useNavigate()
  const { setTitle } = TitleContainer.useContainer()

  useEffect(() => {
    setTitle(
      <>
        <div className="absolute t-2 left-4">
          <LeftIcon onClick={() => navigate('/game-token')} />
        </div>
        <div className="mx-auto text-2xl font-bold">Deposit</div>
      </>
    )
  }, [])

  // userinfo
  const { wallet, signTransaction } = useSolana()
  const { address, loginInfo } = LoginContainer.useContainer()

  // amount
  const [amount, setAmount] = useState('')
  const onChangeAmount = (event: ChangeEvent<HTMLInputElement>) => setAmount(event.target.value)
  const calcAmount = (number: number) => {
    if (number === -1 && amount === '0') return
    setAmount(prev => String(Number(prev || 0) + number))
  }

  // get IDL
  const [idl, setIdl] =useState<any>()
  useEffect(() => {
    getProgramId()
    async function getProgramId () {
      APIRequest.get('/programid').then((res: any) => {
        console.log(res.data.idl)
        setIdl(res.data.idl)
      })
    }
  }, [])

  // deposit
  const depositToken = async (address: string, amount: string) => {
    if (!address) return

    load()

    const number = parseAmount(Number(amount), decimals)

    // program
    const provider = new AnchorProvider(connection as any, wallet, { preflightCommitment: 'processed' })
    const program = new Program(idl as any, provider)

    const transfer_in_accounts = {
      tokenAccountOwnerPda: new PublicKey(loginInfo.tokenAccountOwnerPda),
      pdaSplTokenAccount: new PublicKey(loginInfo.pdaSplTokenAccount),
      senderTokenAccount: new PublicKey(loginInfo.senderTokenAccount),
      splToken: new PublicKey(loginInfo.splToken),
      signer: new PublicKey(address),
      officialPayer: new PublicKey(loginInfo.officialPayer),
    }

    const transferAmount = new BN(number)

    const transfer_in_instruction = await program.methods
      .transferIn(transferAmount)
      .accountsPartial(transfer_in_accounts)
      .instruction()

    const transfer_in_transaction = new Transaction()
    transfer_in_transaction.add(transfer_in_instruction)
    transfer_in_transaction.feePayer = new PublicKey(loginInfo.officialPayer)
    const recentBlockhash = (await connection.getLatestBlockhash()).blockhash
    transfer_in_transaction.recentBlockhash = recentBlockhash

    const signedTransaction = await signTransaction(transfer_in_transaction)

    const body_transaction = bs58.encode(signedTransaction.serialize({ requireAllSignatures: false }))
    const res = await APIRequest.post('/deposit', { transaction: body_transaction, amount: number })
      .then(res => res.data)
      .catch(() => toast.error('Deposit Failed'))

    unload()

    if (res.txid) {
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
      <input
        value={amount}
        onChange={onChangeAmount}
        type="text"
        autoFocus
        className="mx-3 mb-2 p-3 text-lg rounded-2xl border border-[#CCC0B2] bg-transparent"
      />

      <div className="mb-10 px-4">Wallet Balance: { formatAmount(Number(balances.tokenBalance), decimals) } Game Points</div>

      <div className="mx-auto flex items-center gap-4">
        <div className="flex w-16 h-16 rounded-lg border-4 border-bg-dark bg-[#CCC0B2] justify-center items-center">
          <span className="text-4xl" onClick={() => calcAmount(-1)}>-</span>
        </div>

        <div className="w-40 h-24 py-6 border-4 rounded-xl border-[#CCC0B2] text-4xl font-bold bg-white text-center">
          {amount || 0}
        </div>

        <div className="flex w-16 h-16 rounded-lg border-4 border-bg-dark bg-[#CCC0B2] justify-center items-center">
          <span className="text-4xl" onClick={() => calcAmount(1)}>+</span>
        </div>
      </div>

      <div
        onClick={() => setIsOpen(true)}
        className="py-4 mt-auto mb-10 mx-auto w-1/2 text-center bg-secondary text-white font-bold rounded-3xl"
      >
        Next
      </div>


      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>
          <div className="font-bold text-2xl text-center">Deposit</div>
        </DialogTitle>

        <DialogContent>
          <div className="mx-auto mb-4 px-4 py-3 !w-[160px] border-4 border-bg-dark bg-[#CCC0B2] rounded-2xl">
            <div className="mb-2 text-primary font-bold">Points</div>
            <div className="text-center text-3xl font-bold">{amount}</div>
          </div>

          <div className="mb-10 text-center">Fee : 0.00 Game Points</div>

          <div className="flex gap-2">
            <div
              onClick={onClose}
              className="py-2 w-1/2 rounded-3xl border border-secondary text-secondary text-center font-bold"
            >
              Back
            </div>
            <div
              onClick={() => depositToken(address || '', amount)}
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

export default Deposit
