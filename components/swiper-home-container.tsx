import { Suspense, memo } from 'react'

import SwiperHome from './swiperHome'
import SwiperTitle from './swiperTitle'
import { Post } from '@utils/interfaces/data'
import StringComponent from '@components/loaders/string-component'
import dynamic from 'next/dynamic'

const Adsense = dynamic(() => import('@components/adsense'))

const SwiperHomeContainer = ({
  secondary,
  slides,
  priority,
  title,
  posts,
  innerClass,
  href,
  order,
  ...props
}: {
  secondary?: boolean
  title?: string
  slides?: number
  priority?: boolean
  posts?: Post[]
  href?: string
  order?: number
  innerClass?: string
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
          priority,
          unoptimized: !priority,
          width: priority ? 170 : 0,
          height: 0,
        }}
      />
    </div>
    <StringComponent as="div" className="adsContainer" cond={order === 4}>
      <Suspense>
        <Adsense />
      </Suspense>
    </StringComponent>
  </>
)

export default memo(SwiperHomeContainer)
