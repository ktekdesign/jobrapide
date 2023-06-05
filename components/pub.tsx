import { Suspense, memo } from 'react'
import { EffectFlip } from 'swiper'
import dynamic from 'next/dynamic'
const CoverImage = dynamic(() => import('@components/cover-image'))
const SwiperController = dynamic(() => import('@components/swiper-controller'))

const Pub = ({ posts, className = 'swiperContainer', ...props }) => (
  <Suspense>
    <SwiperController
      className={className}
      effect="flip"
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
      }}
      modules={[EffectFlip]}
      posts={posts}
    >
      <CoverImage {...props} />
    </SwiperController>
  </Suspense>
)

export default memo(Pub)
