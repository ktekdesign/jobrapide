import React, { memo } from 'react'
import Link from 'next/link'

import truncate from '@utils/truncate'
import { Post } from '@utils/interfaces'

import CoverImage from '@components/cover-image'

const PostPreview = ({ title, image, uri }: Post) => (
  <>
    <div className="post-preview-image">
      <CoverImage title={title} image={image} uri={uri} />
    </div>
    <h3 className="post-preview-title">
      <Link href={uri}>{truncate(title)}</Link>
    </h3>
  </>
)

export default memo(PostPreview)
