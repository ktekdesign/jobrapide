import PostBody from '@components/post-body'
import PostHeader from '@components/post-header'
import SimilarPosts from '@components/similarPosts'
import { getFirst } from '@utils/manipulateArray'
import { Suspense, memo } from 'react'
import AdSense from '@components/adsense'
import SponsoredAdSense from '@components/adsense-sponsored'

const PostLayout = ({ id, content, ...props }) => (
  <Suspense>
    <PostHeader {...props} />
    <AdSense />
    <PostBody content={content} />
    <SimilarPosts id={id} categoryId={getFirst(props?.categories)?.id} />
    <SponsoredAdSense />
  </Suspense>
)

export default memo(PostLayout)
