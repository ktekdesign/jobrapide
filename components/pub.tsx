import React, { memo } from 'react'
import parse from 'html-react-parser'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFlip } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import 'swiper/css/effect-flip'

export const Pub = ({ items }) => (
  <div className="swiper-container pub">
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
      {items?.map(({ content }, key) => (
        <SwiperSlide key={key}>{parse(content)}</SwiperSlide>
      ))}
    </Swiper>
  </div>
)

export default memo(Pub)
