import React, { FC, memo } from 'react'
import parse from 'html-react-parser'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFlip } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import 'swiper/css/effect-flip'
import { PostsContainerProps } from '@utils/interfaces'

export const Pub: FC<PostsContainerProps> = ({ items, ...props }) => (
  <div {...props}>
    <div className="pub">
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
  </div>
)

export default memo(Pub)
