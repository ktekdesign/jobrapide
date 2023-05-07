import PostBody from '@components/post-body'
import PostHeader from '@components/post-header'
import Loading from '@components/loading'
import SimilarPosts from '@components/similarPosts'
import { getFirst } from '@utils/manipulateArray'

const PostLayout = ({ breadcrumbs, ...props }) => (
  <>
    <Loading data={{ ...props, breadcrumbs }} loading={!props}>
      <PostHeader />
      <PostBody />
    </Loading>
    <SimilarPosts id={props?.id} categoryId={getFirst(props?.categories)?.id} />
  </>
)

export default PostLayout
