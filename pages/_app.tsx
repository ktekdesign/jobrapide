import { AppProps } from 'next/app'
import { useEffect } from 'react'

import ModalContextProvider from '@context/modalContextProvider'
import TermsContextProvider from '@context/termsContextProvider'
import '@styles/index.css'

import TagManager from 'react-gtm-module'
import PostsContextProvider from '@context/postsContextProvider'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-W66949R' })
  }, [])
  return (
    <PostsContextProvider>
      <TermsContextProvider>
        <ModalContextProvider>
          <Component {...pageProps} />
        </ModalContextProvider>
      </TermsContextProvider>
    </PostsContextProvider>
  )
}

export default MyApp
