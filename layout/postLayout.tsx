import PostHeader from '@components/post-header'
import SimilarPosts from '@components/similarPosts'
import { getFirst } from '@utils/manipulateArray'
import { Suspense, memo } from 'react'
import ParsedComponent from '@components/parsed-component'
import dynamic from 'next/dynamic'

const Adsense = dynamic(() => import('@components/adsense'), { ssr: false })

const PostLayout = ({ id, text, ...props }) => (
  <>
    <PostHeader {...props} />
    <div className="adsContainer">
      <Suspense>
        <Adsense />
      </Suspense>
    </div>
    <ParsedComponent as="div" className="content" text={text} />
    <div className="adsContainer">
      <Suspense>
        <Adsense data-ad-slot="2682415108" data-ad-format="autorelaxed" />
      </Suspense>
    </div>
    <SimilarPosts id={id} categoryId={getFirst(props?.categories)?.id} />
  </>
)

export default memo(PostLayout)
