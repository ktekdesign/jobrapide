import { memo } from 'react'

import SwiperHome from '@components/swiperHome'
import SwiperTitle from '@components/swiperTitle'
import { Post } from '@utils/interfaces/data'
import StringComponent from '@components/loaders/string-component'
import Adsense from '@components/adsense'

const SwiperHomeContainer = ({
  secondary,
  slides,
  title,
  posts,
  innerClass,
  href,
  order,
  priority,
  ...props
}: {
  secondary?: boolean
  title?: string
  slides?: number
  posts?: Post[]
  href?: string
  order?: number
  innerClass?: string
  priority?: boolean
}) => (
  <>
    <div className={innerClass} {...props}>
      <SwiperTitle
        className={secondary ? 'title-secondary' : 'title-primary'}
        title={title}
        href={href}
      />
      <SwiperHome
        {...{
          posts,
          slides,
          width: 170,
          height: 0,
          priority,
        }}
      />
    </div>
    <StringComponent as="div" className="adsContainer" cond={order === 4}>
      <Adsense />
    </StringComponent>
  </>
)

export default memo(SwiperHomeContainer)
