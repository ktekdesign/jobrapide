import { memo } from 'react'
import SeoLink from '@components/seoLink'
import ImageWithFallback from '@components/image-with-fallback'

const CoverImage = ({
  title = 'JobRapide',
  image = '',
  href = '',
  priority = false,
  linkClassName = 'feature',
  unoptimized = true,
  width = null,
  height = null,
  order = 0,
  ...props
}) => (
  <SeoLink {...{ href, title, linkClassName, ...props }}>
    <ImageWithFallback
      {...{ width, height, fill: !width && !height }}
      alt={title}
      src={image}
      {...{ priority: priority && order < 3, unoptimized }}
    />
  </SeoLink>
)

export default memo(CoverImage)
