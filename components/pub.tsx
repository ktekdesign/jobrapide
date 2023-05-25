import { memo } from 'react'
import { EffectFlip } from 'swiper'
import SwiperController from './swiper-controller'
import CoverImage from './cover-image'

const Pub = ({ posts, priority, className }) => (
  <SwiperController
    className={className || 'swiper-container'}
    effect="flip"
    breakpoints={{
      0: {
        slidesPerView: 1,
      },
    }}
    modules={[EffectFlip]}
    posts={posts?.map(({ image, href }) => ({ image, href }))}
  >
    <CoverImage priority={priority} />
  </SwiperController>
)

export default memo(Pub)
