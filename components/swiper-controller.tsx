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
  modules = null,
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
        modules={
          modules
            ? [...[Pagination, Autoplay], ...modules]
            : [Pagination, Autoplay]
        }
        {...props}
      >
        {Children.map(children, (child) => {
          if (isValidElement(child))
            return <SwiperSlide>{cloneElement(child)}</SwiperSlide>
        })}
      </Swiper>
    </div>
  </Suspense>
)

export default memo(SwiperController)
