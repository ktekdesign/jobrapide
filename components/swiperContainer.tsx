import React, { FC, memo } from 'react'

import Loading from '@components/loading'
import ComponentsProps from '@utils/interfaces/components'

const SwiperContainer: FC<ComponentsProps> = ({
  children,
  title,
  posts,
  uri,
  slides,
  className,
}) => (
  <div data-swiper="home" {...{ className }}>
    <Loading data={{ title, posts, uri, slides }} loading={!posts}>
      {children}
    </Loading>
  </div>
)

export default memo(SwiperContainer)
