import React, { FC, memo } from 'react'

import truncate from '@utils/truncate'

import CoverImage from '@components/cover-image'
import SeoLink from '@components/seoLink'
import ComponentsProps from '@utils/interfaces/components'

const PostPreview: FC<ComponentsProps> = ({
  title,
  image,
  uri,
  className,
  onlyImage,
  priority,
}) => (
  <>
    <CoverImage
      title={title}
      image={image}
      uri={uri}
      className={className ?? 'post-preview-image'}
      priority={priority}
    />
    {!onlyImage && (
      <SeoLink label={title} href={uri} as="h3" className="post-preview-title">
        {truncate(title)}
      </SeoLink>
    )}
  </>
)

export default memo(PostPreview)
