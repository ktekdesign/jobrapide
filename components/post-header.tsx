import React, { memo } from 'react'

import Date from '@components/date'
import CoverImage from '@components/cover-image'
import PostTitle from '@components/post-title'
import Terms from '@components/terms'
import ShareButtons from '@components/share-buttons'
import Breadcrumb from '@components/breadcrumb'

const PostHeader = ({
  title,
  image,
  date,
  categories,
  secteurs,
  regions,
  breadcrumbs,
}) => (
  <>
    <PostTitle>{title}</PostTitle>
    <Breadcrumb breadcrumbs={breadcrumbs} />
    <CoverImage title={title} image={image} className="post-header-image" />
    <Date dateString={date} className="post-header-date" />
    <Terms
      terms={categories}
      name="Categories : "
      className="post-header-terms"
    />
    <Terms terms={secteurs} name="Domaines : " className="post-header-terms" />
    <Terms terms={regions} name="Regions : " className="post-header-terms" />
    <ShareButtons title={title} />
  </>
)

export default memo(PostHeader)
