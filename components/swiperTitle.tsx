import React, { FC, memo } from 'react'
import SeoLink from '@components/seoLink'
import ComponentsProps from '@utils/interfaces/components'

const SwiperTitle: FC<ComponentsProps> = ({
  href,
  title,
  className = 'title-primary',
}) => (
  <SeoLink as="h2" {...{ className, href, title }}>
    {title}
  </SeoLink>
)

export default memo(SwiperTitle)
