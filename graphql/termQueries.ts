export const secteursQuery = `query secteursQuery {
  secteurs (first: 100) {
    nodes {
      databaseId
      name
      slug
      uri
    }
  }
}
`
export const niveauxQuery = `query niveauxQuery {
  niveaux (first: 100) {
    nodes {
      databaseId
      name
      slug
      uri
    }
  }
}
`
export const categoriesQuery = `
  query Category {
    categories (where: { parent: 16 }) {
      nodes {
        databaseId
        name
        slug
        uri
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
      }
    }
  }
`
