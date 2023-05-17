import React, { FC, memo } from 'react'

import CoverImage from '@components/cover-image'
import Terms from '@components/terms'
import Date from '@components/date'
import ShareButtons from '@components/share-buttons'
import SeoLink from '@components/seoLink'
import PostBody from '@components/post-body'
import ComponentsProps from '@utils/interfaces/components'

const ArchiveBody: FC<ComponentsProps> = ({ posts }) => (
  <section className="archive-body">
    {posts.map(({ image, title, categories, uri, excerpt, date }, key) => (
      <article className="archive" key={key}>
        <CoverImage
          image={image}
          title={title}
          uri={uri}
          className="archive-post-feature"
          priority={key < 2}
        />
        <div className="post-info">
          <Terms
            className="post-list-categories"
            terms={categories}
            title="Categories : "
          />
          <SeoLink
            className="archive-post-title"
            label={title}
            href={uri}
            as="h3"
          >
            {title}
          </SeoLink>
          <Date date={date} className="post-list-terms" />
          <PostBody className="post-list-excerpt" content={excerpt} />
          <ShareButtons uri={uri} title={title} />
        </div>
      </article>
    ))}
  </section>
)

export default memo(ArchiveBody)
