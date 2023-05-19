import React, { FC, memo } from 'react'
import parse from 'html-react-parser'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFlip } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import 'swiper/css/effect-flip'
import ComponentsProps from '@utils/interfaces/components'

export const Pub: FC<ComponentsProps> = ({ posts, className, ...props }) => (
  <div className="row">
    <div className={className || 'swiper-container'} {...props}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
        centeredSlides={true}
        centeredSlidesBounds={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        effect="flip"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
        }}
        modules={[Pagination, Autoplay, EffectFlip]}
      >
        {posts?.map(({ content }, key) => (
          <SwiperSlide key={key}>{content && parse(content)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
)

export default memo(Pub)
