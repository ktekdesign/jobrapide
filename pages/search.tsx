import { getSearchProps } from '@utils/getSearchProps'
import Head from 'next/head'
import MoreStories from '@components/more-stories'
import Pagination from '@components/pagination'
import Layout from '@layout/layout'
import { CMS_NAME } from '@lib/constants'
import ArchiveTitle from '@components/archive-title'

export const getServerSideProps = async ({ query, params, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=3659'
  )
  const data = await getSearchProps(query, params)
  return { props: { ...data, query } }
}

const Search = ({ posts, pageInfo, current, query }) => {
  return (
    <Layout>
      <Head>
        <title>{`Recherche pour ${query.s} | ${CMS_NAME}`}</title>
        <meta
          property="og:image"
          content={posts[0].featuredImage?.node.sourceUrl}
        />
      </Head>

      <ArchiveTitle>{`Recherche pour ${query.s}`}</ArchiveTitle>
      <MoreStories posts={posts} />
    </Layout>
  )
}

export default Search
