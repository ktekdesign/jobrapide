import React, { memo } from 'react'

import CoverImage from '@components/cover-image'
import Terms from '@components/terms'
import Date from '@components/date'
import ShareButtons from '@components/share-buttons'
import SeoLink from '@components/seoLink'
import { Post } from '@utils/interfaces/data'
import { isEmpty } from '@utils/manipulateArray'
import PostBody from '@components/post-body'

const ArchiveBody = ({ posts }: { posts?: Post[] }) => (
  <section className="archive-body">
    {isEmpty(posts) ? (
      <p>Votre recherche n&apos;a retourné aucun résultat.</p>
    ) : (
      posts.map(
        (
          { image, title, categories, uri, excerpt, date, secteurs, regions },
          key
        ) => (
          <article className="archive" key={key}>
            <CoverImage
              image={image}
              title={title}
              width={450}
              height={300}
              uri={uri}
              className="archive-post-feature"
            />
            <div className="post-info">
              <Terms
                className="post-list-categories"
                terms={categories}
                name="Categories : "
              />
              <SeoLink
                className="archive-post-title"
                label={title}
                href={uri}
                as="h3"
              >
                {title}
              </SeoLink>
              <Date dateString={date} className="post-list-terms" />
              <PostBody className="post-list-excerpt" body={excerpt} />
              <Terms
                className="post-list-terms"
                terms={secteurs}
                name="Domaines : "
              />
              <Terms
                className="post-list-terms"
                terms={regions}
                name="Regions : "
              />
              <ShareButtons uri={uri} title={title} />
            </div>
          </article>
        )
      )
    )}
  </section>
)

export default memo(ArchiveBody)
