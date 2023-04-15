import { useRouter } from 'next/router'
import Head from 'next/head'
import Container from '../../components/container'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import { getTermAndPosts } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import dynamic from 'next/dynamic'
const MoreStories = dynamic(() => import('../../components/more-stories'), {
  ssr: false,
})
export default function Category({ term }) {
  const router = useRouter()
  const posts = term?.posts?.edges

  if (!router.isFallback && !posts?.length) {
    return {
      notFound: true,
    }
  }

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <Container>
            <Head>
              <title>{`${term.name} | ${CMS_NAME}`}</title>
              <meta
                property="og:image"
                content={
                  term?.posts?.edges?.shift().node.featuredImage?.node.sourceUrl
                }
              />
            </Head>
            <Container className="lg:flex-col">
              <h1 className="bg-primary text-white text-2xl p-2">
                {term.name}
              </h1>
              {term?.posts?.edges?.length && (
                <MoreStories posts={term?.posts?.edges} />
              )}
            </Container>
          </Container>
        )}
      </Container>
    </Layout>
  )
}

export async function getServerSideProps({ resolvedUrl, res }) {
  const { category: term } = await getTermAndPosts(resolvedUrl, 'category')
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=3659'
  )
  // Pass data to the page via props
  return { props: { term } }
}
