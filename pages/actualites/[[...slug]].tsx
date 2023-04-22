import PostLayout from '@layout/postLayout'
import { generatePostsStaticPaths } from '@utils/generatePostsStaticPaths'
import { getPostProps } from '@utils/getPostProps'

export const getStaticProps = async ({ params }) => {
  const data = await getPostProps(params.slug, '/actualites/')

  return data
}
export const getStaticPaths = async () => {
  const paths = await generatePostsStaticPaths(23)
  return paths
}

const Post = ({ post, posts }) => <PostLayout post={post} posts={posts} />

export default Post
