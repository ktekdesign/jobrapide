import PostHeader from '@components/post-header'
import SimilarPosts from '@components/similarPosts'
import { getFirst } from '@utils/manipulateArray'
import { Suspense, memo } from 'react'
import AdSense from '@components/adsense'
import SponsoredAdSense from '@components/adsense-sponsored'
import ParsedComponent from '@components/parsed-component'

const PostLayout = ({ id, text, ...props }) => (
  <Suspense>
    <PostHeader {...props} />
    <AdSense />
    <div className="content">
      <ParsedComponent text={text} />
    </div>
    <SimilarPosts id={id} categoryId={getFirst(props?.categories)?.id} />
    <SponsoredAdSense />
  </Suspense>
)

export default memo(PostLayout)
