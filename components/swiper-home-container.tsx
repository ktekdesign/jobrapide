import { memo } from 'react'

import SwiperHome from './swiperHome'
import SwiperTitle from './swiperTitle'
import { Post } from '@utils/interfaces/data'

const SwiperHomeContainer = ({
  secondary,
  slides,
  priority,
  title,
  posts,
  innerClass,
  ...props
}: {
  secondary?: boolean
  title?: string
  slides?: number
  priority?: boolean
  posts?: Post[]
  innerClass?: string
}) => (
  <div className={innerClass} {...props}>
    <SwiperTitle
      className={secondary ? 'title-secondary' : 'title-primary'}
      title={title}
    />
    <SwiperHome {...{ posts, slides, priority }} />
  </div>
)

export default memo(SwiperHomeContainer)
