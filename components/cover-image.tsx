import { memo } from 'react'
import SeoLink from '@components/seoLink'
import ImageWithFallback from '@components/image-with-fallback'
import StringComponent from '@components/loaders/string-component'

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
          alt={title}
          src={image}
          {...{ priority: priority && order < 3, unoptimized }}
        />
      </picture>
    </SeoLink>
  </StringComponent>
)

export default memo(CoverImage)
