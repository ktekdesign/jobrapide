import PostBody from '@components/post-body'
import PostHeader from '@components/post-header'
import Loading from '@components/loading'
import SimilarPosts from '@components/similarPosts'
import { getFirst } from '@utils/manipulateArray'
import GAdSense from '@components/adsense'
import { memo } from 'react'
import useSimilarPosts from '@hooks/useSimilarPosts'

const PostLayout = ({ breadcrumbs, ...props }) => (
  <>
    <Loading data={{ ...props, breadcrumbs }} loading={!props}>
      <PostHeader />
      <GAdSense />
      <PostBody />
    </Loading>
    <SimilarPosts
      posts={useSimilarPosts({
        id: props?.id,
        categoryId: getFirst(props?.categories)?.id,
      })}
    />
    <GAdSense variant="sponsored" />
  </>
)

export default memo(PostLayout)
