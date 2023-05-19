import React, { FC, memo } from 'react'

import Date from '@components/date'
import CoverImage from '@components/cover-image'
import PostTitle from '@components/post-title'
import Terms from '@components/terms'
import ShareButtons from '@components/share-buttons'
import Breadcrumb from '@components/breadcrumb'
import ComponentsProps from '@utils/interfaces/components'
import { BreadcrumbType, Term } from '@utils/interfaces/data'

interface PostHeaderProps extends ComponentsProps {
  date?: string
  categories?: Term[]
  secteurs?: Term[]
  regions?: Term[]
  breadcrumbs?: BreadcrumbType[]
}
const PostHeader: FC<PostHeaderProps> = ({
  title,
  image,
  date,
  categories,
  secteurs,
  regions,
  breadcrumbs,
}) => (
  <>
    <PostTitle title={title} />
    <Breadcrumb breadcrumbs={breadcrumbs} />
    <CoverImage
      title={title}
      image={image}
      className="post-header-image"
      priority
    />
    <Date date={date} className="post-header-date" />
    <Terms
      terms={categories}
      title="Categories : "
      className="post-header-terms"
    />
    <Terms terms={secteurs} title="Domaines : " className="post-header-terms" />
    <Terms terms={regions} title="Regions : " className="post-header-terms" />
    <ShareButtons title={title} />
  </>
)

export default memo(PostHeader)
