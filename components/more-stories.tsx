import React, { memo } from 'react'
import parse from 'html-react-parser'
import CoverImage from './cover-image'
import Link from 'next/link'
import Terms from './terms'
import Date from './date'
const MoreStories = ({ posts }) => {
  if (!posts.length) return <></>
  return (
    <section className="flex flex-col gap-4">
      {posts.map(({ node }) => (
        <article
          className="border md:flex hover:shadow-lg"
          key={node.databaseId}
        >
          <div className="md:flex-shrink-0">
            <CoverImage
              featuredImage={node.featuredImage}
              title={node.title}
              width={450}
              height={300}
              className="object-cover w-full md:w-56"
            />
          </div>
          <div className="md:ml-4 md:mr-4 py-4">
            <p className="uppercase tracking-wide text-xs text-indigo-600 font-bold">
              <Terms terms={node.categories.edges} name="Categories : " />
            </p>
            <Link
              href={node.uri}
              className="block text-lg leading-tight font-semibold text-gray-900 hover:underline"
            >
              {node.title}
            </Link>
            <p className="mt-2 tracking-wide text-xs font-bold">
              <Date dateString={node.date} />
            </p>
            <p className="mt-2 mb-2 text-gray-600 text-xs">
              {parse(node.excerpt)}
            </p>
            <p className="tracking-wide text-xs font-bold">
              <Terms terms={node.secteurs.edges} name="Domaines : " />
            </p>
            <p className="tracking-wide text-xs font-bold">
              <Terms terms={node.regions.edges} name="Regions : " />
            </p>
          </div>
        </article>
      ))}
    </section>
  )
}

export default memo(MoreStories)
