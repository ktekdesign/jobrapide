import { FC, memo } from 'react'
import SeoLink from '@components/seoLink'
import ComponentsProps from '@utils/interfaces/components'
import ImageWithFallback from './image-with-fallback'

const CoverImage: FC<ComponentsProps> = ({
  title,
  image,
  uri,
  width,
  height,
  priority,
  target,
  ...props
}) => (
  <SeoLink
    href={uri ?? image}
    label={title}
    as="div"
    active={Number(!uri)}
    target={target ?? '_self'}
    {...props}
  >
    <picture className="feature">
      <ImageWithFallback
        width={width ?? 200}
        height={height ?? 200}
        alt={title ?? ''}
        src={image}
        priority={priority}
      />
    </picture>
  </SeoLink>
)

export default memo(CoverImage)
