import React, { FC, memo } from 'react'

import CoverImage from '@components/cover-image'
import SeoLink from '@components/seoLink'
import ComponentsProps from '@utils/interfaces/components'
import ParsedComponent from './parsed-component'

const PostPreview: FC<ComponentsProps> = ({ title, image, href, ...props }) => (
  <>
    <CoverImage
      linkClassName="post-preview-image"
      {...{ title, image, href, ...props }}
    />
    <SeoLink {...{ title, href }} as="h3" className="post-preview-title">
      <ParsedComponent isTruncate title={title} />
    </SeoLink>
  </>
)

export default memo(PostPreview)
