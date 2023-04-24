const query = `
query $termQuery {
  $term (first: 100) {
    nodes {
      databaseId
      name
      slug
      uri
      count
    }
  }
}
`
export const getSecteursQuery = () => {
  return query.replaceAll('$term', 'secteurs')
}
export const getNiveauxQuery = () => {
  return query.replaceAll('$term', 'niveaux')
}
export const categoriesQuery = `
  query Category {
    categories (where: { parent: 16 }) {
      nodes {
        databaseId
        name
        slug
        uri
        count
      }
    }
  }
`

export const regionsQuery = `
  query Region {
    regions (first: 100) {
      nodes {
        databaseId
        name
        slug
        uri
        count
      }
    }
  }
`

export const regionsLastQuery = `
  query RegionLast {
    regions (first: 100, after: "YXJyYXljb25uZWN0aW9uOjMxNQ==") {
      nodes {
        databaseId
        name
        slug
        uri
        count
      }
    }
  }
`
