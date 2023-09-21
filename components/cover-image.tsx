import { memo } from 'react'
import SeoLink from '@components/seoLink'
import ImageWithFallback from '@components/image-with-fallback'

const CoverImage = ({
  title = 'JobRapide',
  image = '',
  href = '',
  priority = false,
  linkClassName = 'feature',
  width = 0,
  height = 0,
  order = 0,
  ...props
}) => (
  <SeoLink {...{ href, title, linkClassName, ...props }}>
    <ImageWithFallback
      {...{ width, height, fill: !width && !height }}
      alt={title}
      src={image}
      priority={priority && order < 2}
    />
  </SeoLink>
)

export default memo(CoverImage)
