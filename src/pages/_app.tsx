import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log("Current Version: ", process.env.CURRENT_VERSION);
    console.log("Latest Version: ", process.env.LATEST_VERSION);
  }, [])
  

  return <Component {...pageProps} />
}
