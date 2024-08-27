import { useConnect } from '@particle-network/auth-core-modal'
import LoginDecorate from '@/assets/images/login-decorate.png'
import GoogleIcon from '@/assets/icons/google.svg?react'

const Login = () => {

  const { connect } = useConnect()

  const handleLogin = () => connect({ socialType: 'google' })

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <img src={LoginDecorate} className="absolute m-auto w-full pointer-events-none" />
      <span className="mx-auto mb-10 font-bold text-5xl text-primary">Login</span>
      <div
        className="mx-auto mb-32 py-3 w-96 max-w-[90%] flex items-center justify-center gap-3 border border-bg-dark rounded-full"
        onClick={handleLogin}
      >
        <GoogleIcon className="w-7 h-7" />
        <span className="text-xl font-semibold cursor-pointer">Login with google</span>
      </div>
    </div>
  )
}

export default Login
