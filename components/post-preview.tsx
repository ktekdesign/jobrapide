import React, { memo } from 'react'

import truncate from '@utils/truncate'
import { Post } from '@utils/interfaces'

import CoverImage from '@components/cover-image'
import SeoLink from '@components/seoLink'

const PostPreview = ({ title, image, uri }: Post) => (
  <>
    <div className="post-preview-image">
      <CoverImage title={title} image={image} uri={uri} />
    </div>
    <h3 className="post-preview-title">
      <SeoLink label={title} href={uri}>
        {truncate(title)}
      </SeoLink>
    </h3>
  </>
)

export default memo(PostPreview)
