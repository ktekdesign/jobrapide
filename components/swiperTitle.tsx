import React, { FC, memo } from 'react'
import Link from 'next/link'

export const SwiperTitle: FC<{
  uri?: string
  name: string
  className?: string
}> = ({ uri, name, className }) => (
  <h2 className={className || 'title-primary'}>
    {uri ? <Link href={uri}>{name}</Link> : <>{name}</>}
  </h2>
)

export default memo(SwiperTitle)
