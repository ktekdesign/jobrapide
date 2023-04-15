import Date from './date'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Terms from './terms'
import { memo } from 'react'

const PostHeader = ({
  title,
  coverImage,
  date,
  categories,
  secteurs,
  regions,
}) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} featuredImage={coverImage} />
      </div>
      <div className="max-w-2xl">
        <div className="mb-2 text-sm">
          <Date dateString={date} />
        </div>
        <div className="mb-2 text-sm">
          <Terms terms={categories.edges} name="Categories : " />
        </div>
        <div className="mb-2 text-sm">
          <Terms terms={secteurs.edges} name="Domaines : " />
        </div>
        <div className="mb-2 text-sm">
          <Terms terms={regions.edges} name="Regions : " />
        </div>
      </div>
    </>
  )
}

export default memo(PostHeader)
