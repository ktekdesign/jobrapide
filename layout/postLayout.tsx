import PostBody from '@components/post-body'
import PostHeader from '@components/post-header'
import SwiperHome from '@components/swiperHome'
import SwiperTitle from '@components/swiperTitle'

const PostLayout = ({ post, posts, breadcrumbs }) => (
  <>
    <PostHeader {...post} breadcrumbs={breadcrumbs} />
    <PostBody body={post?.content} />
    <SwiperTitle name="Publications similaires" className="title-secondary" />
    <SwiperHome items={posts} slides={3} />
  </>
)

export default PostLayout
