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
          className="border flex-col sm:flex sm:flex-row hover:shadow-lg hover:bg-slate-100 transition-all duration-200"
          key={node.databaseId}
        >
          <div className="sm:w-1/3 md:w-1/4 flex items-center justify-center">
            <CoverImage
              featuredImage={node.featuredImage}
              title={node.title}
              width={450}
              height={300}
              className="object-cover w-full md:w-56"
            />
          </div>
          <div className="sm:w-2/3 md:w-3/4 sm:ml-4 sm:mr-4 py-4">
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
            <div className="mt-2 mb-2 text-gray-600 text-xs">
              {parse(node.excerpt)}
            </div>
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
