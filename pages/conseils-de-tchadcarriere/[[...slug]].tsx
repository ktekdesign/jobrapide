import PostLayout from '@layout/postLayout'
import { generatePostsStaticPaths } from '@utils/generatePostsStaticPaths'
import { getPostProps } from '@utils/getPostProps'

export const getStaticProps = async ({ params }) => {
  const data = await getPostProps(params.slug, '/conseils-de-tchadcarriere/')

  return data
}
export const getStaticPaths = () => generatePostsStaticPaths(94)

const Post = (props) => <PostLayout {...props} />

export default Post
