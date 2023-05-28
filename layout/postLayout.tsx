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
    <Suspense>
      <AdSense />
    </Suspense>
    <div className="content">
      <ParsedComponent text={text} />
    </div>
    <Suspense>
      <SimilarPosts id={id} categoryId={getFirst(props?.categories)?.id} />
    </Suspense>
    <Suspense>
      <SponsoredAdSense />
    </Suspense>
  </Suspense>
)

export default memo(PostLayout)
