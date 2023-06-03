import { AppProps } from 'next/app'
import '@styles/index.css'

import Layout from '@layout/layout'
import Meta from '@components/meta'
import Header from '@layout/header'
import Footer from '@layout/footer'
import InlineScripts from '@components/inline-scripts'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { layout, ...props } = pageProps

  return (
    <>
      <InlineScripts />
      <Meta seo={layout?.seo} />
      <Header route={layout?.pageSlug} />
      <Layout sidebar={layout?.sidebar}>
        <Component {...props} />
      </Layout>
      <Footer route={layout?.pageSlug} />
    </>
  )
}
export default MyApp
