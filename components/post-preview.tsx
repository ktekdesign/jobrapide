import React, { FC, memo } from 'react'

import CoverImage from '@components/cover-image'
import SeoLink from '@components/seoLink'
import ComponentsProps from '@utils/interfaces/components'
import ParsedComponent from './parsed-component'

const PostPreview: FC<ComponentsProps> = ({
  title,
  image,
  href,
  onlyImage,
  ...props
}) => (
  <>
    <CoverImage
      data-preview="post-preview-image"
      {...{ title, image, href, ...props }}
    />
    <SeoLink
      {...{ title, href }}
      as="h3"
      data-hidden={onlyImage}
      className="post-preview-title"
    >
      <ParsedComponent isTruncate title={title} />
    </SeoLink>
  </>
)

export default memo(PostPreview)
