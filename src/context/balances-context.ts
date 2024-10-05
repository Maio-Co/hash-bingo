

import { APIRequest } from '@/service/api-request'
// import { useAuthCore } from '@particle-network/auth-core-modal'
import { useEffect, useState } from 'react'
import { createContainer } from 'unstated-next'
import LoginContainer from './login-context'
// import { getMint } from '@solana/spl-token'
// import { connection } from '@/global'
// import { PublicKey } from '@solana/web3.js'

const defaultBalances = {
  balance: '-',
  available: '-',
  locked: '-',
}

const useBalances = () => {
  const { loginInfo } = LoginContainer.useContainer()

  const [balances, setBalance] = useState(defaultBalances)
  const getBalance = async () => {
    const res = await APIRequest.get('/balance')
      .then(res => res.data)
      .catch(() => defaultBalances)

    setBalance({
      balance: String(res.balance),
      available: String(res.available),
      locked: String(res.locked),
    })
  }

  useEffect(() => {
    setTimeout(() => {
      loginInfo.jwt && getBalance()
    }, 100)
  }, [loginInfo.jwt])

  // token
  const decimals = 9
  // const [decimals, setDecimals] = useState(0)
  // useEffect(() => {
  //   getDecimals()
  //   async function getDecimals() {
  //     const mintInfo = await getMint(connection, new PublicKey(loginInfo.splToken))
  //     setDecimals(mintInfo.decimals)
  //   }
  // }, [loginInfo.splToken])


  // convert amount
  function parseAmount(amount: number, decimals: number) {
    const value = isNaN(amount * Math.pow(10, decimals)) ? 0 : amount * Math.pow(10, decimals)
    return value
  }

  function formatAmount(chainAmount: number, decimals: number) {
    return parseFloat(String(chainAmount / Math.pow(10, decimals))).toFixed(1)
  }

  return { balances, getBalance, decimals, parseAmount, formatAmount }
}

const BalancesContainer = createContainer(useBalances)

export default BalancesContainer
