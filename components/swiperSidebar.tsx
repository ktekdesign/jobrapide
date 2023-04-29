import React, { FC, memo } from 'react'

import ComponentsProps from '@utils/interfaces/components'
import SwiperTitle from './swiperTitle'
import SwiperHome from './swiperHome'

export const SwiperSidebar: FC<ComponentsProps> = ({
  posts,
  className,
  title,
  onlyImage,
}) => (
  <div className="row">
    <SwiperTitle title={title} className={className} />
    <SwiperHome posts={posts} slides={1} onlyImage={onlyImage} />
  </div>
)

export default memo(SwiperSidebar)
