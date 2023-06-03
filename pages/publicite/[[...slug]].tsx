import { generatePostsStaticPaths } from '@utils/generatePostsStaticPaths'
import { getPostProps } from '@utils/getPostProps'
import ParsedComponent from '@components/parsed-component'

export const getStaticProps = async ({ params }) => {
  const data = await getPostProps(params.slug, '')

  return data
}
export const getStaticPaths = async () => generatePostsStaticPaths(192)

const Post = ({ text }) => <ParsedComponent className="pub-post" text={text} />

export default Post
