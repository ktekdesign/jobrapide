import React, { FC, memo } from 'react'
import SeoLink from '@components/seoLink'
import ComponentsProps from '@utils/interfaces/components'
import parse from 'html-react-parser'

export const SwiperTitle: FC<ComponentsProps> = ({ uri, title, className }) => (
  <SeoLink
    as="h2"
    href={uri}
    label={title ?? ''}
    active={Number(!uri)}
    className={className ?? 'title-primary'}
  >
    {title && parse(title)}
  </SeoLink>
)

export default memo(SwiperTitle)
