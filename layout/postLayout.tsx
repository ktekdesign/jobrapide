import Layout from '@layout/layout'

import PostBody from '@components/post-body'
import PostHeader from '@components/post-header'
import SwiperHome from '@components/swiperHome'

const PostLayout = ({ post, posts, layout }) => (
  <Layout {...layout}>
    <PostHeader
      title={post.title}
      breadcrumbs={layout?.seo?.breadcrumbs}
      image={post.image}
      date={post.date}
      categories={post.categories}
      secteurs={post.secteurs}
      regions={post.regions}
    />
    <PostBody>{post.content}</PostBody>
    <SwiperHome
      items={posts}
      slides={3}
      name="Publications similaires"
      className="title-secondary"
    />
  </Layout>
)

export default PostLayout
