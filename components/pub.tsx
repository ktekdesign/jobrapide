import { memo } from 'react'
import { EffectFlip } from 'swiper'
import SwiperController from './swiper-controller'
import CoverImage from './cover-image'

const Pub = ({
  posts,
  priority = false,
  unoptimized = true,
  className = 'swiperContainer',
}) => (
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
    <CoverImage {...{ priority, unoptimized }} />
  </SwiperController>
)

export default memo(Pub)
