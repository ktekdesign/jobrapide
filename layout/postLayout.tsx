import PostBody from '@components/post-body'
import PostHeader from '@components/post-header'
import Loading from '@components/loading'
import SimilarPosts from '@components/similarPosts'
import { getFirst } from '@utils/manipulateArray'
import Adsense from '@components/adsense'

const PostLayout = ({ breadcrumbs, ...props }) => (
  <>
    <Loading data={{ ...props, breadcrumbs }} loading={!props}>
      <PostHeader />
      <Adsense />
      <PostBody />
    </Loading>
    <SimilarPosts id={props?.id} categoryId={getFirst(props?.categories)?.id} />
    <Adsense variant="sponsored" />
  </>
)

export default PostLayout
