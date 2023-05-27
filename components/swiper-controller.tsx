import { Suspense, memo } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import { prev } from '@utils/manipulateArray'
import LoaderComponent from '@components/loaders/loader'

export const SwiperController = ({
  children,
  className = 'swiperContainer',
  slides = 1,
  modules = [],
  posts,
  ...props
}) => (
  <Suspense>
    <div {...{ className }}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        spaceBetween={10}
        autoplay={{
          delay: 15000,
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
        modules={[Pagination, Autoplay, ...modules]}
        {...props}
      >
        {posts?.map((post, key) => (
          <SwiperSlide key={key}>
            <LoaderComponent {...{ order: key, ...post }}>
              {children}
            </LoaderComponent>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </Suspense>
)

export default memo(SwiperController)
