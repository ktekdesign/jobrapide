import Layout from '@layout/layout'

import PostBody from '@components/post-body'
import PostHeader from '@components/post-header'
import SwiperHome from '@components/swiperHome'
import SwiperTitle from '@components/swiperTitle'
import { isEmpty } from '@utils/manipulateArray'
import Loading from '@components/loading'

const PostLayout = ({ post, posts, layout }) => (
  <Layout {...layout}>
    {isEmpty(post) || isEmpty(posts) ? (
      <Loading loading={true} error={false}>
        <></>
      </Loading>
    ) : (
      <>
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
        <SwiperTitle
          name="Publications similaires"
          className="title-secondary"
        />
        <SwiperHome items={posts} slides={3} />
      </>
    )}
  </Layout>
)

export default PostLayout
