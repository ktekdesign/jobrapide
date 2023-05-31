import { outputErrors } from '@utils/outputErrors'
import { pageInfoSearch } from '@graphql/api/apiResponse'
import loadFromWPGraphQL from '@graphql/api/loadFromWPGraphQL'

const getTermPostsCount = async ({
  category,
  secteur,
  region,
  tag,
  search,
}: {
  category?: string
  secteur?: string
  region?: string
  tag?: string
  search?: string
}) => {
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
  query TermTotal${category || 16}${secteur || ''}${region || ''} {
    posts(where: {
        ${search ? `search: "${search}"` : ''}
        ${category_query}
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
      ${pageInfoSearch}
    }
  }
  `
  try {
    const data = await loadFromWPGraphQL(query)

    return data?.posts?.pageInfo?.offsetPagination?.total
  } catch (err) {
    return outputErrors(err)
  }
}

export default getTermPostsCount
