import PostLayout from '@layout/postLayout'
import { getPostProps } from '@utils/getPostProps'

export const getServerSideProps = async ({ resolvedUrl, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=3659'
  )
  const data = await getPostProps(resolvedUrl)
  return data
}

const Post = ({ post, posts }) => <PostLayout post={post} posts={posts} />

export default Post
