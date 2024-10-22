import { APIRequest } from '@/service/api-request'
// import { useAuthCore } from '@particle-network/auth-core-modal'
import { useEffect, useState } from 'react'
import { createContainer } from 'unstated-next'
import LoginContainer from './login-context'
import { decimals } from '@/global'
// import { getMint } from '@solana/spl-token'
// import { connection } from '@/global'
// import { PublicKey } from '@solana/web3.js'

const defaultBalances = {
  balance: '-', //balance  表示可用餘額 ( pdaTokenBalance  - locked )
  locked: '-', //locked 表示下注總和
  pdaTokenBalance: '-', //pdaTokenBalance 表示當前儲值餘額
  tokenBalance: '-', //tokenBalance 表示該帳號本身未儲值之token數量
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
      locked: String(res.locked),
      pdaTokenBalance: String(res.pdaTokenBalance),
      tokenBalance: String(res.tokenBalance),
    })
  }

  useEffect(() => {
    setTimeout(() => {
      loginInfo.jwt && getBalance()
    }, 100)
  }, [loginInfo.jwt])


  // convert amount
  function parseAmount(amount: number, decimals: number) {
    const value = isNaN(amount * Math.pow(10, decimals)) ? 0 : amount * Math.pow(10, decimals)
    return value
  }

  function formatAmount(chainAmount: number, decimals: number) {
    const value = parseFloat(String(chainAmount / Math.pow(10, decimals)))
    return isNaN(value) ? '-' : value.toFixed(1)
  }

  return { balances, getBalance, decimals, parseAmount, formatAmount }
}

const BalancesContainer = createContainer(useBalances)

export default BalancesContainer
