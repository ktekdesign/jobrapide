import React, { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import PostPreview from './post-preview'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'

export const SimilarPosts = ({ posts }) => {
  if (!posts?.length) return <></>
  return (
    <>
      <h2 className="p-4 text-white bg-secondary">Publications similaires</h2>
      <div className="bg-dark">
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
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="blog-slides"
        >
          {posts.map(({ node }) => (
            <SwiperSlide key={node.id}>
              <PostPreview
                key={node.id}
                id={node.id}
                title={node.title}
                featuredImage={node.featuredImage}
                uri={node.uri}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
export default memo(SimilarPosts)
