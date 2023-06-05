import { AppProps } from 'next/app'
import '@styles/index.css'

import Layout from '@layout/layout'
import Meta from '@components/meta'
import Header from '@layout/header'
import Footer from '@layout/footer'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { layout, ...props } = pageProps

  return (
    <>
      <Meta seo={layout?.seo} />
      <Header route={layout?.pageSlug} />
      <Layout {...layout?.sidebar}>
        <Component {...props} />
      </Layout>
      <Footer route={layout?.pageSlug} />
    </>
  )
}
export default MyApp
