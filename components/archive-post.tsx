import { FC, memo } from 'react'
import CoverImage from './cover-image'
import PostBody from './post-body'
import SeoLink from './seoLink'
import ShareButtons from './share-buttons'
import Terms from './terms'
import Date from '@components/date'
import { Post } from '@utils/interfaces/data'
import Translate from './translate'

interface ArchivePostType extends Post {
  priority?: boolean
}

const ArchivePost: FC<ArchivePostType> = ({
  image,
  title,
  categories,
  uri,
  excerpt,
  date,
  priority,
}) => (
  <article className="archive">
    <CoverImage
      image={image}
      title={title}
      uri={uri}
      className="archive-post-feature"
      priority={priority}
    />
    <div className="post-info">
      <Terms
        className="post-list-categories"
        terms={categories}
        title="Categories : "
      />
      <SeoLink className="archive-post-title" label={title} href={uri} as="h3">
        <Translate text={title} />
      </SeoLink>
      <Date date={date} className="post-list-terms" />
      <PostBody className="post-list-excerpt" content={excerpt} />
      <ShareButtons uri={uri} title={title} />
    </div>
  </article>
)

export default memo(ArchivePost)
