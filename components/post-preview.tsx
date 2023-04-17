import React, { memo } from 'react'
import Link from 'next/link'

import truncate from '@utils/truncate'
import { PostProps } from '@utils/interfaces'

import CoverImage from '@components/cover-image'

const PostPreview = ({ title, featuredImage, uri, priority }: PostProps) => (
  <>
    <div className="mb-5 bg-white">
      {featuredImage && (
        <CoverImage
          title={title}
          featuredImage={featuredImage}
          uri={uri}
          priority={priority}
        />
      )}
    </div>
    <h3 className="text-sm mb-3 leading-snug">
      <Link href={uri} className="text-white hover:underline">
        {truncate(title)}
      </Link>
    </h3>
  </>
)

export default memo(PostPreview)
