import PostHeader from '@components/post-header'
import SimilarPosts from '@components/similarPosts'
import { getFirst } from '@utils/manipulateArray'
import { memo } from 'react'
import ParsedComponent from '@components/parsed-component'
import Adsense from '@components/adsense'

const PostLayout = ({ id, text, ...props }) => (
  <>
    <PostHeader {...props} />
    <div className="adsContainer">
      <Adsense />
    </div>
    <ParsedComponent as="div" className="content" text={text} />
    <div className="adsContainer">
      <Adsense data-ad-slot="2682415108" data-ad-format="autorelaxed" />
    </div>
    <SimilarPosts id={id} categoryId={getFirst(props?.categories)?.id} />
  </>
)

export default memo(PostLayout)
