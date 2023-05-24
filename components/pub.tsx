import { FC, memo } from 'react'
import { EffectFlip } from 'swiper'
import ComponentsProps from '@utils/interfaces/components'
import SwiperController from './swiper-controller'
import ParsedComponent from './parsed-component'

const Pub: FC<ComponentsProps> = ({ posts, className }) => (
  <SwiperController
    className={className || 'swiper-container'}
    effect="flip"
    breakpoints={{
      0: {
        slidesPerView: 1,
      },
    }}
    modules={[EffectFlip]}
    posts={posts}
  >
    <ParsedComponent />
  </SwiperController>
)

export default memo(Pub)
