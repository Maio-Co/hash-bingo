import { useAuthCore, useSolana } from '@particle-network/auth-core-modal'
import { setAuth, APIRequest } from '@/service/api-request'
import { useEffect, useMemo, useState } from 'react'
import { createContainer } from 'unstated-next'
import LoadingContainer from './loading-context'
import toast from 'react-hot-toast'

interface LoginInfo {
  jwt: string
  officialPayer: string
  pdaSplTokenAccount: string
  senderTokenAccount: string
  splToken: string
  tokenAccountOwnerPda: string
}

const useLogin = () => {
  const { load, unload } = LoadingContainer.useContainer()
  const { userInfo = {} } = useAuthCore()
  const { uuid = '', token = '' } = userInfo as any
  const { address = '' } = useSolana()

  // login info
  const [loginInfo, setLoginInfo] = useState({
    jwt: '',
    officialPayer: '',
    pdaSplTokenAccount: '',
    senderTokenAccount: '',
    splToken: '',
    tokenAccountOwnerPda: '',
  })

  const getApiToken = async (address: string, uuid: string, token: string) => {
    load()
    await APIRequest.post('/login', { uuid, token, wallet: { address, chain: 'solana' } })
      .then(res => setLoginInfo(res.data as LoginInfo))
      .catch(() => toast.error('Login failed'))
    unload()
  }

  useEffect(() => {
    if (uuid && token && address) getApiToken(address || '', uuid, token)
  }, [uuid, address, token])

  useEffect(() => {
    if (loginInfo.jwt) setAuth(loginInfo.jwt)
  }, [loginInfo.jwt])

  const isLogin = useMemo(() => loginInfo.jwt !== '', [loginInfo.jwt])

  return { uuid, token, address, userInfo, isLogin, loginInfo }
}

const LoginContainer = createContainer(useLogin)

export default LoginContainer
