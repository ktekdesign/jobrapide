import React, { FC, memo } from 'react'
import SeoLink from '@components/seoLink'
import ComponentsProps from '@utils/interfaces/components'

const SwiperTitle: FC<ComponentsProps> = ({ href, title, className }) => (
  <SeoLink as="h2" data-primary="true" {...{ className, href, title }}>
    {title}
  </SeoLink>
)

export default memo(SwiperTitle)
