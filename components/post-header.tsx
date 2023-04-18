import React, { memo } from 'react'

import Date from '@components/date'
import CoverImage from '@components/cover-image'
import PostTitle from '@components/post-title'
import Terms from '@components/terms'

const PostHeader = ({ title, image, date, categories, secteurs, regions }) => (
  <>
    <PostTitle>{title}</PostTitle>
    <div className="mb-8 md:mb-16 sm:mx-0">
      <CoverImage title={title} image={image} />
    </div>
    <div className="mb-2 text-sm font-bold">
      <Date dateString={date} />
    </div>
    <div className="mb-2 text-xs">
      <Terms terms={categories} name="Categories : " />
    </div>
    <div className="mb-2 text-xs">
      <Terms terms={secteurs} name="Domaines : " />
    </div>
    <div className="mb-2 text-xs">
      <Terms terms={regions} name="Regions : " />
    </div>
  </>
)

export default memo(PostHeader)
