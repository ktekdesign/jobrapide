import React, { FC, memo } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'

import PostPreview from '@components/post-preview'
import ComponentsProps from '@utils/interfaces/components'
import { prev } from '@utils/manipulateArray'

export const SwiperHome: FC<ComponentsProps> = ({
  posts,
  slides = 3,
  onlyImage,
  priority,
  className,
}) => (
  <div className={`swiper-container ${onlyImage ? 'bg-white' : 'bg-dark'}`}>
    <Swiper
      pagination={{
        clickable: true,
      }}
      spaceBetween={10}
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
          slidesPerView: prev(slides) || 1,
        },
        1024: {
          slidesPerView: slides,
        },
      }}
      modules={[Pagination, Autoplay]}
    >
      {posts?.map(({ uri, title, image }, key) => (
        <SwiperSlide key={key}>
          <PostPreview
            title={title}
            image={image}
            uri={uri}
            onlyImage={onlyImage}
            className={className}
            priority={priority && key < 3}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
)

export default memo(SwiperHome)
