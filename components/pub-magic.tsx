import { Suspense, memo } from 'react'
import dynamic from 'next/dynamic'
import MagicSlide from './magic-slide'
const CoverImage = dynamic(() => import('@components/cover-image'))

const Pub = ({ posts, priority = false, ...props }) => (
  <Suspense>
    <MagicSlide>
      {posts?.map((post, key) => (
        <div key={key} {...props}>
          <CoverImage {...{ priority, ...post }} />
        </div>
      ))}
    </MagicSlide>
  </Suspense>
)

export default memo(Pub)
