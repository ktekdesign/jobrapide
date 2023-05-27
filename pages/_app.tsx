import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '@graphql/client'
import '@styles/index.css'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'

import Layout from '@layout/layout'
import Meta from '@components/meta'
import { Suspense } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Suspense>
    <Meta seo={pageProps.layout?.seo} />
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  </Suspense>
)

export default MyApp
