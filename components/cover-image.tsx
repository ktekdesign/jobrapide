import { memo } from 'react'
import SeoLink from '@components/seoLink'
import ImageWithFallback from '@components/image-with-fallback'
import StringComponent from '@components/loaders/string-component'

const CoverImage = ({
  title = 'JobRapide',
  image = '',
  href = '',
  priority = false,
  order = 0,
  ...props
}) => (
  <StringComponent>
    <SeoLink as="div" {...{ href, title, ...props }}>
      <picture className="feature">
        <ImageWithFallback
          fill
          alt={title}
          src={image}
          {...{ priority: priority && order < 3 }}
        />
      </picture>
    </SeoLink>
  </StringComponent>
)

export default memo(CoverImage)
