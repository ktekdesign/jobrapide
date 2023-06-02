import PostHeader from '@components/post-header'
import { memo } from 'react'
import AdSense from '@components/adsense'
import SponsoredAdSense from '@components/adsense-sponsored'
import ParsedComponent from '@components/parsed-component'

const PostLayout = ({ text, ...props }) => (
  <>
    <PostHeader {...props} />
    <AdSense />
    <ParsedComponent as="div" className="content" text={text} />
    <SponsoredAdSense />
  </>
)

export default memo(PostLayout)
