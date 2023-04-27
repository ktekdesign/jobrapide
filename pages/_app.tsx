import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { ApolloProvider } from '@apollo/client'
import client from '@graphql/client'
import '@styles/index.css'

import TagManager from 'react-gtm-module'
import Layout from '@layout/layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { layout, ...props } = pageProps

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-W66949R' })
  }, [])

  return (
    <ApolloProvider client={client}>
      <Layout {...layout}>
        <Component {...props} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
