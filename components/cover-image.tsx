import { memo } from 'react'
import SeoLink from '@components/seoLink'
import ImageWithFallback from '@components/image-with-fallback'

const CoverImage = ({
  title = 'JobRapide',
  image = '',
  href = '',
  priority = false,
  linkClassName = 'feature',
  order = 0,
  ...props
}) => (
  <SeoLink {...{ href, title, linkClassName, ...props }}>
    <ImageWithFallback
      fill
      alt={title}
      src={image}
      {...{ priority: priority && order < 3 }}
    />
  </SeoLink>
)

export default memo(CoverImage)
