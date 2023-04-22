import React, { memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFlip } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import 'swiper/css/effect-flip'

export const ImageSlider = ({ items, name, width = 0, height = 0 }) => (
  <div className="swiper-container">
    <h2 className="title-secondary">{name}</h2>
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
      {items?.map(({ uri, title, image }, key) => (
        <SwiperSlide key={key}>
          <Link href={uri} className="flex justify-center" target="_blank">
            <Image
              width={width || 200}
              height={height || 200}
              alt={title}
              src={image}
              className="max-h-max h-auto"
              priority
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
)

export default memo(ImageSlider)
