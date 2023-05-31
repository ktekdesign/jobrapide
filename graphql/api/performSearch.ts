import { mapPost } from '@utils/mapping'
import { outputErrors } from '@utils/outputErrors'
import { PER_PAGE } from '@utils/constants'
import { posts_response } from '@graphql/api/apiResponse'
import loadFromWPGraphQL from '@graphql/api/loadFromWPGraphQL'

const performSearch = async ({
  page = 1,
  search,
  category,
  secteur,
  region,
  tag,
}: {
  page?: number
  search?: string
  category?: string
  secteur?: string
  region?: string
  tag?: string
}) => {
  if (!page) return null
  const wherePagination = `offsetPagination: { size: ${PER_PAGE}, offset: ${
    PER_PAGE * page - PER_PAGE
  }}`
  const category_query = `categoryId: ${category || 16},`
  const secteur_query = secteur
    ? `{
    includeChildren: true
    terms: ["${secteur}"]
    taxonomy: SECTEUR
    operator: IN
    field: ID
  },`
    : ''
  const region_query = region
    ? `{
    includeChildren: true
    terms: ["${region}"]
    taxonomy: REGION
    operator: IN
    field: ID
  }`
    : ''
  const tag_query = tag
    ? `{
    terms: ["${tag}"]
    taxonomy: TAG
    operator: IN
    field: ID
  }`
    : ''
  const query = `
  query Search${category || 16}${secteur || ''}${region || ''}${page} {
    posts(first: 10
      where: {
        ${search ? `search: "${search}"` : ''}
        ${category_query}
        ${wherePagination}
        taxQuery: {
          relation: AND,
          taxArray: [
            ${secteur_query}
            ${region_query}
            ${tag_query}
          ]
        }
      }
    ){
      ${posts_response}
    }
  }
  `
  try {
    const data = await loadFromWPGraphQL(query)

    return {
      posts: data?.posts?.nodes?.map((post) => mapPost(post)),
    }
  } catch (err) {
    return outputErrors(err)
  }
}

export default performSearch
