import PostLayout from '@layout/postLayout'
import { generatePostsStaticPaths } from '@utils/generatePostsStaticPaths'
import { getPostProps } from '@utils/getPostProps'
import client from '@graphql/client'

export const getStaticProps = async ({ params }) => {
  const data = await getPostProps(params.slug, '/actualites/', client)

  return data
}
export const getStaticPaths = async () => {
  const paths = await generatePostsStaticPaths(23, client)
  return paths
}

const Post = (props) => <PostLayout {...props} />

export default Post
