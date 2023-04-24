import React, { FC, memo } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'

import PostPreview from '@components/post-preview'
import { PostsContainerProps } from '@utils/interfaces'

export const SwiperHome: FC<PostsContainerProps> = ({
  items,
  slides = 1,
  ...props
}) => {
  return (
    <div {...props}>
      <div className="swiper-container bg-dark">
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
    </div>
  )
}

export default memo(SwiperHome)
