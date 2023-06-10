/* eslint-disable no-case-declarations */
import { TermType } from '@utils/interfaces/data'
import { mapTerm } from '@utils/mapping'
import { outputErrors } from '@utils/outputErrors'
import performSearch from '@graphql/api/performSearch'
import loadFromWPGraphQL from './loadFromWPGraphQL'
import { seo_response } from './apiResponse'
import { posts_response } from '@graphql/api/apiResponse'

const getTermAndPosts = async ({ slug, type, currentPage = 1 }) => {
  const lowerCaseType = type.toLowerCase()
  try {
    const query = `query term${lowerCaseType}${slug.replaceAll(
      '-',
      '_'
    )}${currentPage} {
      ${lowerCaseType}(
      id: "${slug}"
      idType: SLUG
      ) {
        databaseId
        name
        uri
        slug
        ${lowerCaseType === 'category' ? 'parentDatabaseId' : ''}
        ${seo_response}
        ${currentPage === 1 ? `posts(first: 10) { ${posts_response} }` : ''}
      }
      }`
    const data = await loadFromWPGraphQL(query)

    const mappedTerm = mapTerm(data[lowerCaseType])
    const termId = mappedTerm?.id.toString()
    const response = {} as {
      secteur?: string
      region?: string
      tag?: string
      category?: string
    }

    switch (type) {
      case TermType.Secteur:
        response.secteur = termId
        if (currentPage === 1) return { ...mappedTerm, ...response }
        break

      case TermType.Region:
        response.region = termId
        if (currentPage === 1) return { ...mappedTerm, ...response }
        break

      case TermType.Tag:
        response.tag = termId
        if (currentPage === 1) return { ...mappedTerm, ...response }
        break

      default:
        response.category = termId
        if (currentPage === 1) return { ...mappedTerm, ...response }
    }
    const posts = await performSearch({
      page: currentPage,
      ...response,
    })

    return {
      ...mappedTerm,
      posts,
      ...response,
    }
  } catch (err) {
    return outputErrors(err)
  }
}

export default getTermAndPosts
