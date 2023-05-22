import React, { FC, memo } from 'react'
import SeoLink from '@components/seoLink'
import ComponentsProps from '@utils/interfaces/components'

const SwiperTitle: FC<ComponentsProps> = ({ uri, title, className }) => (
  <SeoLink
    as="h2"
    href={uri}
    label={title}
    active={Number(!uri)}
    data-primary="true"
    {...{ className }}
  >
    {title}
  </SeoLink>
)

export default memo(SwiperTitle)
