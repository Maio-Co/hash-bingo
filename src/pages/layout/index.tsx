import { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Login from './login'
import ProgressCircular from '@/components/progress-circular'
import Button from '@mui/material/Button'
import LoginContainer from '@/context/login-context'
import Drawer from '@mui/material/Drawer'
import { useAuthCore } from '@particle-network/auth-core-modal'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import LoadingContainer from '@/context/loading-context'
import DrawerContainer from '@/context/drawer-context'
import { useConnect } from '@particle-network/auth-core-modal'

interface LayoutProps {
  isErrorPage?: boolean
  children?: React.ReactNode
}

const Layout = ({ isErrorPage = false, children }: LayoutProps) => {
  const { isLoading, load, unload } = LoadingContainer.useContainer()
  const { isLogin } = LoginContainer.useContainer()
  const { isOpenDrawer, openDrawer, closeDrawer } = DrawerContainer.useContainer()
  const { userInfo } = useAuthCore()

  const { disconnect } = useConnect()

  const navigate = useNavigate()

  const toastOption = {  style: { wordBreak: 'break-all' } } as any

  const toNavigate = (path: string) => {
    closeDrawer()
    navigate(path)
  }

  const disconnectWallet = async () => {
    load()
    await disconnect()
    navigate('/')
    location.reload()
    unload()
  }

  return (
    <div className="Frame max-w-screen-sm mx-auto bg-bg">
      <main className="min-h-dvh flex flex-col relative w-full">
        { !isLogin && <Login /> }
        { isLogin &&
          <>
            <Header openDrawer={openDrawer} />
            <section className="w-full h-[calc(100dvh-144px)] overflow-auto">
              { isErrorPage ? children : <Outlet /> }
            </section>
            <Footer />
          </>
        }

        <Toaster position="top-center" reverseOrder={true} toastOptions={toastOption}/>
      </main>

      <Drawer open={isOpenDrawer} onClose={closeDrawer}>
        <div className="w-[80vw] h-full p-4 flex flex-col bg-bg">
          <div className="mb-6 py-2 border-b-2 border-bg-dark">
            <div className="mb-2 text-primary text-2xl font-bold">Email</div>
            <div>{ userInfo?.google_email || '-' }</div>
          </div>

          <div className="px-3 py-4 text-white font-bold text-xl bg-bg-dark rounded-lg cursor-pointer" onClick={() => toNavigate('/game-token')}>Game Token</div>

          <div className="mt-auto mb-6 text-lg text-center text-primary font-bold" onClick={disconnectWallet}>Sign out</div>
        </div>
      </Drawer>


      <Backdrop sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 9999 })} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

Layout.SuspenseLayout = () => {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full min-h-screen flex justify-center items-center">
          <ProgressCircular />
        </div>
      }>
      <Outlet />
    </Suspense>
  )
}

Layout.ErrorBoundary = () => {
  return (
    <Layout isErrorPage>
      <div className="flex h-[calc(100dvh-56px)]">
        <section className="m-auto p-8 w-full max-w-screen-sm flex justify-center items-center gap-8 text-primary">
          {/* <img src={NotFound} className="w-1/2" /> */}
          <div className="w-4/5">
            <h1 className="mb-2 text-5xl font-black">Oops!</h1>
            <h2 className="mb-4 text-4xl font-black">Get Some Error</h2>
            <p className="mb-6">we're sorry the page you requested could be error. Please go back to the homepage!</p>
            <Link to="/">
              <Button variant="contained" size="large" fullWidth className="!bg-secondary !text-white">Back Homepage</Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

Layout.NotFound = () => {
  return (
    <div className="flex h-[calc(100dvh-56px)]">
      <section className="m-auto p-8 w-full max-w-screen-sm flex justify-center items-center gap-8 text-primary">
        {/* <img src={NotFound} className="w-1/2" /> */}
        <div className="w-4/5">
          <h1 className="mb-2 text-5xl font-black">404</h1>
          <h2 className="mb-4 text-4xl font-black">Page Not Found</h2>
          <p className="mb-6">we're sorry the dpage you requested could not be found. Please go back to the homepage!</p>
          <Link to="/">
            <Button variant="contained" size="large" fullWidth className="!bg-secondary !text-white">Back Homepage</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Layout
