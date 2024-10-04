

import { APIRequest } from '@/service/api-request'
// import { useAuthCore } from '@particle-network/auth-core-modal'
import { useEffect, useState } from 'react'
import { createContainer } from 'unstated-next'
import LoginContainer from './login-context'

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

  return { balances, getBalance }
}

const BalancesContainer = createContainer(useBalances)

export default BalancesContainer
