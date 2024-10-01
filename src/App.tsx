import Router from '@/routes'
import { ThemeProvider } from '@mui/material/styles'
import ProviderContainer from '@/context/provider-context'
import LoginContainer from '@/context/login-context'
import BalancesContainer from '@/context/balances-context'
import TitleContainer from '@/context/title-context'
import { theme } from './styles/theme'
import { AuthCoreContextProvider } from '@particle-network/auth-core-modal'
import NotFound from '@/assets/images/not-found.png'
import { AuthType } from '@particle-network/auth-core'
import { solana, solanaDevnet } from '@particle-network/authkit/chains'
import LoadingContainer from './context/loading-context'
import DrawerContainer from './context/provider-context copy'

import('buffer').then(({ Buffer }) => {
  window.Buffer = Buffer
})

const App = () => {
  return (
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
          displayTokenAddresses: ['HZeB8bQANoKrUH39E3VqrCMyu2gfH7NanEC16LCfqhUG'],
          supportChains: [solana, solanaDevnet],
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

      <ThemeProvider theme={theme}>
        <LoadingContainer.Provider>
          <DrawerContainer.Provider>
            <ProviderContainer.Provider>
              <LoginContainer.Provider>
                <BalancesContainer.Provider>
                  <TitleContainer.Provider>
                    <Router />
                  </TitleContainer.Provider>
                </BalancesContainer.Provider>
              </LoginContainer.Provider>
            </ProviderContainer.Provider>
          </DrawerContainer.Provider>
        </LoadingContainer.Provider>
      </ThemeProvider>
    </AuthCoreContextProvider>
  )
}

export default App
