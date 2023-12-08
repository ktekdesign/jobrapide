import { memo } from 'react'
import { EffectFlip } from 'swiper'
import dynamic from 'next/dynamic'
const CoverImage = dynamic(() => import('@components/cover-image'))
const SwiperController = dynamic(() => import('@components/swiper-controller'))

const Pub = ({ posts, className = 'swiperContainer', ...props }) => (
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
)

export default memo(Pub)
