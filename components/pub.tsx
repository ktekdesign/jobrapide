import { memo } from 'react'
import { EffectFlip } from 'swiper'
import SwiperController from '@components/swiper-controller'
import CoverImage from '@components/cover-image'

const Pub = ({ posts, priority = false, className = 'swiperContainer' }) => (
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
    <CoverImage {...{ priority }} />
  </SwiperController>
)

export default memo(Pub)
