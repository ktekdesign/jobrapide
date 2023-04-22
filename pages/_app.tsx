import { AppProps } from 'next/app'
import { useEffect } from 'react'

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
        <Component {...pageProps} />
      </TermsContextProvider>
    </PostsContextProvider>
  )
}

export default MyApp
