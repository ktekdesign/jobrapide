import { memo } from 'react'
import PostBody from '@components/post-body'
import PostHeader from '@components/post-header'
import SwiperHome from '@components/swiperHome'
import SwiperTitle from '@components/swiperTitle'
import Loading from '@components/loading'
import { isEmpty } from '@utils/manipulateArray'

const PostLayout = ({ posts, breadcrumbs, ...props }) => (
  <>
    <Loading data={{ ...props, breadcrumbs }} loading={isEmpty(props)}>
      <PostHeader />
      <PostBody />
    </Loading>
    <SwiperTitle title="Publications similaires" className="title-secondary" />
    <Loading data={{ posts }} loading={isEmpty(posts)}>
      <SwiperHome />
    </Loading>
  </>
)

export default memo(PostLayout)
