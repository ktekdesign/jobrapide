import React, { memo } from 'react'

import truncate from '@utils/truncate'
import { Post } from '@utils/interfaces/data'

import CoverImage from '@components/cover-image'
import SeoLink from '@components/seoLink'

const PostPreview = ({ title, image, uri }: Post) => (
  <>
    <CoverImage
      title={title}
      image={image}
      uri={uri}
      className="post-preview-image"
    />
    <SeoLink label={title} href={uri} as="h3" className="post-preview-title">
      {truncate(title)}
    </SeoLink>
  </>
)

export default memo(PostPreview)
