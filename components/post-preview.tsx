import React, { FC, memo } from 'react'

import CoverImage from '@components/cover-image'
import SeoLink from '@components/seoLink'
import ComponentsProps from '@utils/interfaces/components'
import ParsedComponent from './parsed-component'
import StringComponent from './loaders/string-component'

const PostPreview: FC<ComponentsProps> = ({
  title,
  image,
  href,
  onlyImage,
  ...props
}) => (
  <>
    <CoverImage
      linkClassName="post-preview-image"
      width={170}
      height={0}
      {...{ title, image, href, ...props }}
    />
    <StringComponent cond={!onlyImage}>
      <SeoLink {...{ title, href }} as="h3" className="post-preview-title">
        <ParsedComponent isTruncate title={title} />
      </SeoLink>
    </StringComponent>
  </>
)

export default memo(PostPreview)
