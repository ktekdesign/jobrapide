import React, { FC, memo } from 'react'

import Loading from '@components/loading'
import ComponentsProps from '@utils/interfaces/components'
import SwiperTitle from './swiperTitle'
import SwiperHome from './swiperHome'

export const SwiperSidebar: FC<ComponentsProps> = ({
  posts,
  className,
  onlyImage,
  ...props
}) => {
  return (
    <div className="row">
      <Loading data={{ posts, slides: 1, ...props }} loading={false}>
        <SwiperTitle className={className} />
        <SwiperHome onlyImage={onlyImage} />
      </Loading>
    </div>
  )
}

export default memo(SwiperSidebar)
