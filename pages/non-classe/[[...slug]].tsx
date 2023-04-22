import PostLayout from '@layout/postLayout'
import { generatePostsStaticPaths } from '@utils/generatePostsStaticPaths'
import { getPostProps } from '@utils/getPostProps'

export const getStaticProps = async ({ params }) => {
  const data = await getPostProps(params.slug, '/non-classe/')

  return data
}
export const getStaticPaths = async () => {
  const paths = await generatePostsStaticPaths(1)
  return paths
}

const Post = ({ post, posts }) => <PostLayout post={post} posts={posts} />

export default Post
