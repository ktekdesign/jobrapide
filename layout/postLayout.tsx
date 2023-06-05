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
    <Suspense>
      <Adsense />
    </Suspense>
    <ParsedComponent as="div" className="content" text={text} />
    <Suspense>
      <Adsense slot="2682415108" format="autorelaxed" />
    </Suspense>
    <SimilarPosts id={id} categoryId={getFirst(props?.categories)?.id} />
  </>
)

export default memo(PostLayout)
