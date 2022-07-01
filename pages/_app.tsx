import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import AuthWrapper from '../components/Authwrapper'
import { Widget } from '../components/Widget'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <SessionProvider session={session}>
        <AuthWrapper>
          <Component {...pageProps} />
          <Widget />
        </AuthWrapper>
      </SessionProvider>
    </ThemeProvider>
  )
}

export default MyApp
