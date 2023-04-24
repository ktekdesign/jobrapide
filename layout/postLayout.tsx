import PostBody from '@components/post-body'
import PostHeader from '@components/post-header'
import SwiperHome from '@components/swiperHome'
import SwiperTitle from '@components/swiperTitle'

const PostLayout = ({ post, posts, breadcrumbs }) => (
  <>
    <PostHeader
      title={post?.title}
      breadcrumbs={breadcrumbs}
      image={post?.image}
      date={post?.date}
      categories={post?.categories}
      secteurs={post?.secteurs}
      regions={post?.regions}
    />
    <PostBody>{post?.content}</PostBody>
    <SwiperTitle name="Publications similaires" className="title-secondary" />
    <SwiperHome items={posts} slides={3} />
  </>
)

export default PostLayout
