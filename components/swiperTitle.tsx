import React, { FC, HTMLAttributes, memo } from 'react'
import SeoLink from '@components/seoLink'

interface SwiperTitleProps extends HTMLAttributes<HTMLElement> {
  uri?: string
  name?: string
  width?: number
  height?: number
}
export const SwiperTitle: FC<SwiperTitleProps> = ({ uri, name, ...props }) =>
  uri ? (
    <SeoLink
      as="h2"
      href={uri}
      label={name}
      className={props?.className || 'title-primary'}
    >
      {name}
    </SeoLink>
  ) : (
    <h2 className={props?.className || 'title-primary'}>{name}</h2>
  )

export default memo(SwiperTitle)
