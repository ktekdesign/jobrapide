export const secteursPathsQuery = `query secteursQuery {
  secteurs (first: 1) {
    nodes {
      slug
    }
  }
}
`
export const niveauxPathsQuery = `query niveauxQuery {
  niveaux (first: 1) {
    nodes {
      slug
    }
  }
}
`
export const categoriesPathsQuery = `
  query Category {
    categories (first: 10, where: { hideEmpty: true, parent: 16, excludeTree:["17", "18", "19", "20"] }) {
      nodes {
        slug
      }
    }
  }
`
export const othersCategoriesPathsQuery = `
  query Category {
    categories (first: 1, where: { hideEmpty: true, excludeTree:["88", "192", "193", "194", "349", "16"] }) {
      nodes {
        slug
      }
    }
  }
`

export const regionsPathsQuery = `
  query Region {
    regions (first: 1) {
      nodes {
        slug
      }
    }
  }
`

export const tagsPathsQuery = `query tagsQuery {
  tags (first: 1) {
    nodes {
      slug
    }
  }
}
`
