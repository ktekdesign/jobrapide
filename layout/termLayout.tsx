import Head from 'next/head'
import Layout from '@layout/layout'

import { CMS_NAME } from '@lib/constants'

import dynamic from 'next/dynamic'
const MoreStories = dynamic(() => import('@components/more-stories'), {
  ssr: false,
})

const TermLayout = ({ term }) => (
  <Layout>
    <Head>
      <title>{`${term.name} | ${CMS_NAME}`}</title>
      <meta
        property="og:image"
        content={term?.posts?.edges?.shift().node.featuredImage?.node.sourceUrl}
      />
    </Head>

    <h1 className="bg-primary text-white text-2xl p-2">{term.name}</h1>
    {term?.posts?.edges?.length && <MoreStories posts={term?.posts?.edges} />}
  </Layout>
)

export default TermLayout
