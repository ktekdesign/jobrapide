import React, { memo } from 'react'
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'

import PostPreview from '@components/post-preview'

export const SwiperHome = ({ items, uri, name, slides, className }) => {
  return (
    <div className="swiper-container bg-dark">
      <h2 className={className}>
        <Link href={uri}>{name}</Link>
      </h2>
      <Swiper
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: Math.max(slides - 1, 2),
          },
          1024: {
            slidesPerView: slides,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        {items?.map(({ uri, title, image }, key) => (
          <SwiperSlide key={key}>
            <PostPreview title={title} image={image} uri={uri} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default memo(SwiperHome)
