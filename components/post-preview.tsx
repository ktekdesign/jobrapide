import React, { FC, memo } from 'react'

import truncate from '@utils/truncate'

import CoverImage from '@components/cover-image'
import SeoLink from '@components/seoLink'
import ComponentsProps from '@utils/interfaces/components'

const PostPreview: FC<ComponentsProps> = ({
  title,
  image,
  uri,
  onlyImage,
  ...props
}) => (
  <>
    <CoverImage
      title={title}
      image={image}
      uri={uri}
      data-preview="post-preview-image"
      {...props}
    />
    <SeoLink
      label={title}
      href={uri}
      as="h3"
      data-hidden={onlyImage}
      className="post-preview-title"
    >
      {truncate(title)}
    </SeoLink>
  </>
)

export default memo(PostPreview)
