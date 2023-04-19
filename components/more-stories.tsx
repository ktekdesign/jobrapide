import React, { memo } from 'react'
import Link from 'next/link'
import parse from 'html-react-parser'

import CoverImage from '@components/cover-image'
import Terms from '@components/terms'
import Date from '@components/date'
import { isEmpty } from '@utils/manipulateArray'

const MoreStories = ({ posts }) => {
  if (isEmpty(posts)) return <></>

  return (
    <section className="flex flex-col gap-4">
      {posts.map(
        ({
          id,
          image,
          title,
          categories,
          uri,
          excerpt,
          date,
          secteurs,
          regions,
        }) => (
          <article className="archive" key={id}>
            <div className="archive-post-feature">
              <CoverImage
                image={image}
                title={title}
                width={450}
                height={300}
              />
            </div>
            <div className="post-info">
              <p className="post-list-categories">
                <Terms terms={categories} name="Categories : " />
              </p>
              <Link className="archive-post-title" href={uri}>
                {title}
              </Link>
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
            </div>
          </article>
        )
      )}
    </section>
  )
}

export default memo(MoreStories)
