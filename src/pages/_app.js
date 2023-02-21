import '@/styles/globals.css'
import '../styles/bars.css'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps : {session , ...pageProps} }) {
  return <SessionProvider >
    <Component {...pageProps} />
  </SessionProvider>
}
