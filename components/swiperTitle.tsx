import React, { FC, HTMLAttributes, memo } from 'react'
import SeoLink from '@components/seoLink'

interface SwiperTitleProps extends HTMLAttributes<HTMLElement> {
  uri?: string
  name?: string
  width?: number
  height?: number
}
export const SwiperTitle: FC<SwiperTitleProps> = ({ uri, name, ...props }) => (
  <h2 className={props?.className || 'title-primary'}>
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
