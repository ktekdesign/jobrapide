import { memo } from 'react'
import SeoLink from '@components/seoLink'
import ImageWithFallback from './image-with-fallback'
import ConditionalComponent from './loaders/conditional-component'

const CoverImage = ({
  title = 'JobRapide',
  image = '',
  href = '',
  priority = false,
  ...props
}) => (
  <ConditionalComponent isFragment cond={!!image}>
    <SeoLink href={href} title={title} as="div" {...props}>
      <picture className="feature">
        <ImageWithFallback
          fill
          quality={75}
          alt={title}
          src={image}
          priority={priority}
        />
      </picture>
    </SeoLink>
  </ConditionalComponent>
)

export default memo(CoverImage)
