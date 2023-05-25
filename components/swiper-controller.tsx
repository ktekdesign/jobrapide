import { Children, Suspense, cloneElement, isValidElement, memo } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import { prev } from '@utils/manipulateArray'

export const SwiperController = ({
  children,
  className,
  slides = 1,
  modules = [],
  priority = false,
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
            {Children.map(children, (child) => (
              <>
                {isValidElement(child) &&
                  cloneElement(child, {
                    ...post,
                    priority: priority && key < 2,
                  })}
              </>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </Suspense>
)

export default memo(SwiperController)
