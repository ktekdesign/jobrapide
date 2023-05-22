import React, { FC, memo } from 'react'

import ComponentsProps from '@utils/interfaces/components'
import SwiperTitle from '@components/swiperTitle'
import SwiperHome from '@components/swiperHome'

const SwiperSidebar: FC<ComponentsProps> = ({
  posts,
  className,
  title,
  onlyImage,
}) => (
  <>
    <SwiperTitle title={title} className={className} />
    <SwiperHome posts={posts} slides={1} onlyImage={onlyImage} />
  </>
)

export default memo(SwiperSidebar)
