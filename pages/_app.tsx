import { AppProps } from 'next/app'
import { useEffect } from 'react'

import ModalContextProvider from '@context/modalContextProvider'
import TermsContextProvider from '@context/termsContextProvider'
import '@styles/index.css'

import TagManager from 'react-gtm-module'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-W66949R' })
  }, [])
  return (
    <TermsContextProvider>
      <ModalContextProvider>
        <Component {...pageProps} />
      </ModalContextProvider>
    </TermsContextProvider>
  )
}

export default MyApp
