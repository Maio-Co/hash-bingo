import { lazy, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Layout from '@/pages/layout'
import NotFound from '@/assets/images/not-found.png'
// Particle imports
import { AuthCoreContextProvider } from '@particle-network/auth-core-modal'
import { AuthType } from '@particle-network/auth-core'
import { solana } from '@particle-network/authkit/chains'

const routes = [
  { key: 'home', path: '/', index: true, component: lazy(() => import('@/pages/home')) },
  { key: 'not-found', path: '*', index: false, component: Layout.NotFound },
]

const root = (
  <Route path="/" element={<Layout />} errorElement={<Layout.ErrorBoundary />}>
    <Route element={<Layout.SuspenseLayout />}>
      {routes.map(item => (<Route key={item.key} index={item.index} path={item.path} element={<item.component/>} />)) }
    </Route>
  </Route>
)


const Router = () => {
  return (
    <ErrorBoundary fallbackRender={Layout.ErrorBoundary}>
      <AuthCoreContextProvider options={{
        projectId: '71013a88-20c7-4719-bcc9-70f51d080ae6',
        clientKey: 'cqLTcP5sUciuwMoFqLCMYrhPNleJuTjrs5LDjgvL',
        appId: '3e4b05ec-6311-437c-b93c-20122efc3af5',
        authTypes: [AuthType.google],
        customStyle: { logo: NotFound },
        wallet: {
          visible: true,
          themeType: 'light',
          customStyle: {
            displayTokenAddresses: ['So11111111111111111111111111111111111111112', 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'],
            supportChains: [solana],
            supportAddToken: true,
            light: {
              colorAccent: '#E5935A',
              colorPrimary: '#F0EEE8',
              primaryButtonBackgroundColors: ['#E5935A', '#E5935B'],
              primaryIconButtonBackgroundColors: ['#CCC0B299', '#CCC0B298'],
              cancelButtonBackgroundColor: 'blue',
              messageColors: ['#8B7361', '#8B7361'],
              borderGlowColors: ['#7bd5f940', '#323233'],
              modalMaskBackgroundColor: '#141430b3',
              cardBorderRadius: 4,
            },
          },
        }
      }}>
        <Suspense>
          <RouterProvider router={createBrowserRouter(createRoutesFromElements(root))} />
        </Suspense>
      </AuthCoreContextProvider>
    </ErrorBoundary>

  )
}


export default Router