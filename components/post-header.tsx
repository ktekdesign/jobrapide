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
    <div className="post-header-image">
      <CoverImage title={title} image={image} />
    </div>
    <div className="post-header-date">
      <Date dateString={date} />
    </div>
    <div className="post-header-terms">
      <Terms terms={categories} name="Categories : " />
    </div>
    <div className="post-header-terms">
      <Terms terms={secteurs} name="Domaines : " />
    </div>
    <div className="post-header-terms">
      <Terms terms={regions} name="Regions : " />
    </div>
    <ShareButtons title={title} />
  </>
)

export default memo(PostHeader)
