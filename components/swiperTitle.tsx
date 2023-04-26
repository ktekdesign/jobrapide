import React, { FC, memo } from 'react'
import SeoLink from '@components/seoLink'
import ComponentsProps from '@utils/interfaces/components'

export const SwiperTitle: FC<ComponentsProps> = ({
  uri,
  title,
  className,
  ...props
}) => (
  <SeoLink
    as="h2"
    href={uri || '#'}
    label={title}
    className={className || 'title-primary'}
    {...props}
  >
    {title}
  </SeoLink>
)

export default memo(SwiperTitle)
