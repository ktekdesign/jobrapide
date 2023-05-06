import React, { FC, memo } from 'react'

import Loading from '@components/loading'
import ComponentsProps from '@utils/interfaces/components'

export const SwiperContainer: FC<ComponentsProps> = ({
  children,
  title,
  posts,
  uri,
  slides,
  className,
}) => (
  <div className={`p-1 lg:pt-0 lg:pb-2 ${className ?? 'w-full'}`}>
    <Loading data={{ title, posts, uri, slides }} loading={!posts}>
      {children}
    </Loading>
  </div>
)

export default memo(SwiperContainer)
