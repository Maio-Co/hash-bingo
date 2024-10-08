import { lazy, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Layout from '@/pages/layout'

const routes = [
  { key: 'home', path: '/', index: true, component: lazy(() => import('@/pages/home')) },
  { key: 'rules', path: '/rules', index: true, component: lazy(() => import('@/pages/rules')) },
  { key: 'game-token', path: '/game-token', index: true, component: lazy(() => import('@/pages/game-token')) },
  { key: 'bingo-history', path: '/history', index: true, component: lazy(() => import('@/pages/bingo-history')) },
  { key: 'bingo-card', path: '/bingo-card/:id', index: true, component: lazy(() => import('@/pages/bingo-card')) },
  { key: 'withdraw', path: '/withdraw', index: true, component: lazy(() => import('@/pages/token-withdraw')) },
  { key: 'deposit', path: '/deposit', index: true, component: lazy(() => import('@/pages/token-deposit')) },
  { key: 'successful', path: '/successful', index: true, component: lazy(() => import('@/pages/successful')) },
  { key: 'congratulations', path: '/congratulations', index: true, component: lazy(() => import('@/pages/congratulations')) },
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
      <Suspense>
        <RouterProvider router={createBrowserRouter(createRoutesFromElements(root))} />
      </Suspense>
    </ErrorBoundary>
  )
}


export default Router
