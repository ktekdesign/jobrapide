import Head from 'next/head'
import Layout from '@layout/layout'

import { CMS_NAME } from '@lib/constants'
import SimilarPosts from '@components/similarPosts'
import PostBody from '@components/post-body'
import PostHeader from '@components/post-header'

const PostLayout = ({ post, posts }) => (
  <Layout>
    <Head>
      <title>{`${post.title} | ${CMS_NAME}`}</title>
      <meta property="og:image" content={post.image} />
    </Head>
    <PostHeader
      title={post.title}
      image={post.image}
      date={post.date}
      categories={post.categories}
      secteurs={post.secteurs}
      regions={post.regions}
    />
    <PostBody content={post.content} />
    <SimilarPosts posts={posts} />
  </Layout>
)

export default PostLayout
