import PostHeader from '@components/post-header'
import SimilarPosts from '@components/similarPosts'
import { getFirst } from '@utils/manipulateArray'
import { memo } from 'react'
import SponsoredAdSense from '@components/adsense-sponsored'
import ParsedComponent from '@components/parsed-component'

const PostLayout = ({ id, text, ...props }) => (
  <>
    <PostHeader {...props} />
    <div className="adsense" />
    <ParsedComponent as="div" className="content" text={text} />
    <SponsoredAdSense />
    <SimilarPosts id={id} categoryId={getFirst(props?.categories)?.id} />
  </>
)

export default memo(PostLayout)
