import React, { FC, memo } from 'react'
import SeoLink from '@components/seoLink'

export const SwiperTitle: FC<{
  uri?: string
  name: string
  className?: string
}> = ({ uri, name, className }) => (
  <h2 className={className || 'title-primary'}>
    {uri ? (
      <SeoLink href={uri} label={name}>
        {name}
      </SeoLink>
    ) : (
      <>{name}</>
    )}
  </h2>
)

export default memo(SwiperTitle)
