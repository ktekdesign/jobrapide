import React, { FC, memo } from 'react'

import Date from '@components/date'
import CoverImage from '@components/cover-image'
import Terms from '@components/terms'
import ShareButtons from '@components/share-buttons'
import Breadcrumb from '@components/breadcrumb'
import ComponentsProps from '@utils/interfaces/components'
import { BreadcrumbType, Term } from '@utils/interfaces/data'
import ParsedComponent from './parsed-component'

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
    <h1 className="post-title">
      <ParsedComponent title={title} />
    </h1>
    <Breadcrumb breadcrumbs={breadcrumbs} />
    <CoverImage
      title={title}
      image={image}
      active={1}
      className="post-header-image"
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
