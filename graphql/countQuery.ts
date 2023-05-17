const query = `
    query TermTotal$category$secteur$region$tag {
      posts(where: {
          $search
          categoryId: $category
          $tax_query
        }
      ){
          pageInfo {
              offsetPagination {
                  total
              }
            }
      }
    }
    `
export const getQuery = ({ category, secteur, region, tag, search }) => {
  let countQuery = query

  if (secteur || region || tag) {
    countQuery = countQuery.replace(
      '$tax_query',
      `taxQuery: {
    relation: AND,
    taxArray: [
      $secteur_query
      $region_query
      $tag_query
    ]
  }`
    )
  } else {
    countQuery = countQuery.replace('$tax_query', '')
  }
  if (secteur) {
    countQuery = countQuery
      .replace(
        '$secteur_query',
        `{
        includeChildren: true
        terms: ["${secteur}"]
        taxonomy: SECTEUR
        operator: IN
        field: ID
      },`
      )
      .replaceAll('$secteur', secteur)
  } else {
    countQuery = countQuery
      .replace('$secteur_query', '')
      .replaceAll('$secteur', '')
  }
  if (region) {
    countQuery = countQuery
      .replace(
        '$region_query',
        `{
            includeChildren: true
            terms: ["${region}"]
            taxonomy: REGION
            operator: IN
            field: ID
          },`
      )
      .replaceAll('$region', region)
  } else {
    countQuery = countQuery
      .replace('$region_query', '')
      .replaceAll('$region', '')
  }
  if (tag) {
    countQuery = countQuery
      .replace(
        '$tag_query',
        `{
            includeChildren: true
            terms: ["${tag}"]
            taxonomy: TAG
            operator: IN
            field: ID
          },`
      )
      .replaceAll('$tag', tag)
  } else {
    countQuery = countQuery.replace('$tag_query', '').replaceAll('$tag', '')
  }
  if (search) {
    countQuery = countQuery.replace('$search', `search: "${search}"`)
  } else {
    countQuery = countQuery.replace('$search', '')
  }
  countQuery = countQuery.replaceAll('$category', category ?? 16)

  return countQuery
}
