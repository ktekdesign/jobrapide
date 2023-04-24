import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { ApolloProvider } from '@apollo/client'
import client from '@graphql/client'
import TermsContextProvider from '@context/termsContextProvider'
import '@styles/index.css'

import TagManager from 'react-gtm-module'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-W66949R' })
  }, [])

  return (
    <ApolloProvider client={client}>
      <TermsContextProvider>
        <Component {...pageProps} />
      </TermsContextProvider>
    </ApolloProvider>
  )
}

export default MyApp
