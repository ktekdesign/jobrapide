import React, { memo } from 'react'
import parse from 'html-react-parser'

import CoverImage from '@components/cover-image'
import Terms from '@components/terms'
import Date from '@components/date'
import ShareButtons from '@components/share-buttons'
import SeoLink from '@components/seoLink'

const ArchiveBody = ({ posts }) => (
  <section className="archive-body">
    {posts?.map(
      (
        { image, title, categories, uri, excerpt, date, secteurs, regions },
        key
      ) => (
        <article className="archive" key={key}>
          <div className="archive-post-feature">
            <CoverImage
              image={image}
              title={title}
              width={450}
              height={300}
              uri={uri}
            />
          </div>
          <div className="post-info">
            <p className="post-list-categories">
              <Terms terms={categories} name="Categories : " />
            </p>
            <SeoLink className="archive-post-title" label={title} href={uri}>
              {title}
            </SeoLink>
            <p className="post-list-terms">
              <Date dateString={date} />
            </p>
            <div className="post-list-excerpt">{parse(excerpt)}</div>
            <p className="post-list-terms">
              <Terms terms={secteurs} name="Domaines : " />
            </p>
            <p className="post-list-terms">
              <Terms terms={regions} name="Regions : " />
            </p>
            <ShareButtons uri={uri} title={title} />
          </div>
        </article>
      )
    )}
  </section>
)

export default memo(ArchiveBody)
