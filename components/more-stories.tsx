import React, { memo } from 'react'
import Link from 'next/link'
import parse from 'html-react-parser'

import CoverImage from '@components/cover-image'
import Terms from '@components/terms'
import Date from '@components/date'

const MoreStories = ({ posts }) => {
  if (!posts.length) return <></>

  return (
    <section className="flex flex-col gap-4">
      {posts.map(({ node }) => (
        <article className="archive" key={node.databaseId}>
          <div className="archive-post-feature">
            <CoverImage
              featuredImage={node.featuredImage}
              title={node.title}
              width={450}
              height={300}
            />
          </div>
          <div className="post-info">
            <p className="post-list-categories">
              <Terms terms={node.categories.edges} name="Categories : " />
            </p>
            <Link className="archive-post-title" href={node.uri}>
              {node.title}
            </Link>
            <p className="post-list-terms">
              <Date dateString={node.date} />
            </p>
            <div className="post-list-excerpt">{parse(node.excerpt)}</div>
            <p className="post-list-terms">
              <Terms terms={node.secteurs.edges} name="Domaines : " />
            </p>
            <p className="post-list-terms">
              <Terms terms={node.regions.edges} name="Regions : " />
            </p>
          </div>
        </article>
      ))}
    </section>
  )
}

export default memo(MoreStories)
