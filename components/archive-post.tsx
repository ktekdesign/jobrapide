import { FC, Suspense, memo } from 'react'
import CoverImage from '@components/cover-image'
import SeoLink from '@components/seoLink'
import ShareButtons from '@components/share-buttons'
import Terms from 'components/terms'
import Date from '@components/date'
import { Post } from '@utils/interfaces/data'
import ParsedComponent from '@components/parsed-component'

interface ArchivePostType extends Post {
  priority?: boolean
}

const ArchivePost: FC<ArchivePostType> = ({
  image,
  title,
  categories,
  href,
  excerpt,
  date,
  priority,
}) => (
  <Suspense>
    <article className="archive">
      <CoverImage
        {...{ image, title, href, priority }}
        className="archive-post-feature"
      />
      <div className="post-info">
        <Terms
          className="post-list-categories"
          terms={categories}
          title="Categories : "
        />
        <SeoLink className="archive-post-title" {...{ title, href }} as="h3">
          <ParsedComponent title={title} />
        </SeoLink>
        <Date date={date} className="post-list-terms" />
        <div className="post-list-excerpt">
          <ParsedComponent text={excerpt} />
        </div>
        <ShareButtons {...{ href, title }} />
      </div>
    </article>
  </Suspense>
)

export default memo(ArchivePost)
