import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import parse from 'html-react-parser'
import truncate from '../utils/truncate'
import { PostProps } from '../interfaces'
import Terms from './terms'
import { memo } from 'react'

const PostPreview = ({
  title,
  featuredImage,
  date,
  excerpt,
  uri,
  categories,
}: PostProps) => {
  return (
    <div>
      <div className="mb-5 bg-white">
        {featuredImage && (
          <CoverImage title={title} featuredImage={featuredImage} uri={uri} />
        )}
      </div>
      <h3 className="text-sm mb-3 leading-snug">
        <Link href={uri} className="text-white hover:underline">
          {truncate(title)}
        </Link>
      </h3>
      {date && (
        <div className="text-lg mb-4">
          <Date dateString={date} />
        </div>
      )}
      {categories?.edges?.length && (
        <div className="text-xs mb-4">
          <Terms terms={categories.edges} name="Categories : " />
        </div>
      )}
      {excerpt && (
        <div className="text-xs leading-relaxed mb-4">{parse(excerpt)}</div>
      )}
    </div>
  )
}
export default memo(PostPreview)
