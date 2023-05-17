import React, { FC, memo } from 'react'
import SeoLink from '@components/seoLink'
import ComponentsProps from '@utils/interfaces/components'

export const SwiperTitle: FC<ComponentsProps> = ({ uri, title, className }) => (
  <>
    {uri ? (
      <SeoLink
        as="h2"
        href={uri}
        label={title ?? ''}
        className={className ?? 'title-primary'}
      >
        {title}
      </SeoLink>
    ) : (
      <h2 className={className ?? 'title-primary'}>{title}</h2>
    )}
  </>
)

export default memo(SwiperTitle)
