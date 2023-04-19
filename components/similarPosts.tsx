import React, { memo } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'

import PostPreview from '@components/post-preview'
import { isEmpty } from '@utils/manipulateArray'

export const SimilarPosts = ({ posts }) => {
  if (isEmpty(posts)) return <></>

  return (
    <div className="swiper-container bg-dark">
      <h2 className="title-secondary">Publications similaires</h2>
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
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        {posts.map(({ id, title, image, uri }) => (
          <SwiperSlide key={id}>
            <PostPreview title={title} image={image} uri={uri} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default memo(SimilarPosts)
