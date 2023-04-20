import Layout from '@layout/layout'

import SimilarPosts from '@components/similarPosts'
import PostBody from '@components/post-body'
import PostHeader from '@components/post-header'

const PostLayout = ({ post, posts }) => (
  <Layout seo={post.seo}>
    <PostHeader
      title={post.title}
      image={post.image}
      date={post.date}
      categories={post.categories}
      secteurs={post.secteurs}
      regions={post.regions}
    />
    <PostBody>{post.content}</PostBody>
    <SimilarPosts posts={posts} />
  </Layout>
)

export default PostLayout
