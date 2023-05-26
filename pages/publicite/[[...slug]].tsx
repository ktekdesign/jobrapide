import { generatePostsStaticPaths } from '@utils/generatePostsStaticPaths'
import { getPostProps } from '@utils/getPostProps'
import { Suspense } from 'react'
import ParsedComponent from '@components/parsed-component'

export const getStaticProps = async ({ params }) => {
  const data = await getPostProps(params.slug, '')

  return data
}
export const getStaticPaths = async () => generatePostsStaticPaths(192)

const Post = (props) => (
  <Suspense>
    <div className="pub-post">
      <ParsedComponent text={props?.text} />
    </div>
  </Suspense>
)

export default Post
