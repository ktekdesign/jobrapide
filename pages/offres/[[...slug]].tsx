import PostLayout from '@layout/postLayout'
import { generatePostsStaticPaths } from '@utils/generatePostsStaticPaths'
import { getPostProps } from '@utils/getPostProps'

export const getStaticProps = async ({ params }) => {
  const data = await getPostProps(params.slug, '/offres/')

  return data
}
export const getStaticPaths = async () => {
  const paths = await generatePostsStaticPaths(16)
  return paths
}
const Post = (props) => <PostLayout {...props} />

export default Post
