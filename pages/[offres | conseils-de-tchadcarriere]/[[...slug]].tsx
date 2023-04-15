import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import { getPostAndMorePosts } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import SimilarPosts from '../../components/similarPosts'

export default function Post({ post, posts }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>{`${post.title} | ${CMS_NAME}`}</title>
              <meta
                property="og:image"
                content={post.featuredImage?.node.sourceUrl}
              />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.featuredImage}
              date={post.date}
              categories={post.categories}
              secteurs={post.secteurs}
              regions={post.regions}
            />
            <PostBody content={post.content} />
          </article>

          <SimilarPosts posts={morePosts} />
        </>
      )}
    </Layout>
  )
}

export async function getServerSideProps({ resolvedUrl, res }) {
  const data = await getPostAndMorePosts(resolvedUrl)

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  return {
    props: {
      post: data.post,
      posts: data.posts,
    },
  }
}
