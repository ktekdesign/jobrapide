export const similarQuery = `
query SimilarPosts {
  posts(first: 3, where: { notIn: [$id] categoryId: $categoryId orderby: { field: DATE, order: DESC } }) {
    nodes {
      title
      uri
      featuredImage {
        node {
          sourceUrl
        }
      } 
    }
  }
}
`
