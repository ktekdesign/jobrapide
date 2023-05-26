import { memo } from 'react'
import SeoLink from '@components/seoLink'
import ImageWithFallback from './image-with-fallback'
import StringComponent from './loaders/string-component'

const CoverImage = ({
  title = 'JobRapide',
  image = '',
  href = '',
  priority = false,
  unoptimized = true,
  order = 0,
  ...props
}) => (
  <StringComponent cond={!!image}>
    <SeoLink as="div" {...{ href, title, ...props }}>
      <picture className="feature">
        <ImageWithFallback
          fill
          quality={75}
          alt={title}
          src={image}
          {...{ priority: priority && order < 3, unoptimized }}
        />
      </picture>
    </SeoLink>
  </StringComponent>
)

export default memo(CoverImage)
