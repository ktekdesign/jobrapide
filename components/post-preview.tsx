import React, { memo } from 'react'
import Link from 'next/link'

import truncate from '@utils/truncate'
import { Post } from '@utils/interfaces'

import CoverImage from '@components/cover-image'

const PostPreview = ({ title, image, uri }: Post) => (
  <>
    <div className="mb-5 bg-white">
      {image && <CoverImage title={title} image={image} uri={uri} />}
    </div>
    <h3 className="text-sm mb-3 leading-snug">
      <Link href={uri} className="text-white hover:underline">
        {truncate(title)}
      </Link>
    </h3>
  </>
)

export default memo(PostPreview)
