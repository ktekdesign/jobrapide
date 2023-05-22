import React, { FC, Fragment, memo } from 'react'
import parse from 'html-react-parser'
import { EffectFlip } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import 'swiper/css/effect-flip'
import ComponentsProps from '@utils/interfaces/components'
import SwiperController from './swiper-controller'

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
  >
    {posts?.map(({ content }, key) => (
      <Fragment key={key}>{content && parse(content)}</Fragment>
    ))}
  </SwiperController>
)

export default memo(Pub)
