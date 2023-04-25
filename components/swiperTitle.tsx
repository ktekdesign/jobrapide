import React, { FC, memo } from 'react'
import SeoLink from '@components/seoLink'
import ComponentsProps from '@utils/interfaces/components'

export const SwiperTitle: FC<ComponentsProps> = ({
  uri,
  name,
  className,
  ...props
}) => (
  <SeoLink
    as="h2"
    href={uri || '#'}
    label={name}
    className={className || 'title-primary'}
    {...props}
  >
    {name}
  </SeoLink>
)

export default memo(SwiperTitle)
