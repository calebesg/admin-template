import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppProvider, AuthProvider } from '../data/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  )
}

export default MyApp
