import { memo } from 'react'
import SeoLink from '@components/seoLink'
import ImageWithFallback from './image-with-fallback'

const CoverImage = ({
  title = 'JobRapide',
  image,
  href = '',
  priority = false,
  ...props
}) => (
  <SeoLink href={href} title={title} as="div" {...props}>
    <picture className="feature">
      <ImageWithFallback fill alt={title} src={image} priority={priority} />
    </picture>
  </SeoLink>
)

export default memo(CoverImage)
