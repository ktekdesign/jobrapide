import { SwiperSlide } from 'swiper/react'
import LoaderComponent from './loaders/loader'
import { memo } from 'react'

const SwiperSlideItem = ({ children, ...props }) => (
  <>
    <SwiperSlide>
      <LoaderComponent {...props}>{children}</LoaderComponent>
    </SwiperSlide>
  </>
)

export default memo(SwiperSlideItem)
