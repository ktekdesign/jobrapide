const query = `
query PostsHome$id {
  category (id: $id, idType: DATABASE_ID) {
    name
    uri
    posts(first: $postsPerPage, where: { orderby: { field: DATE, order: DESC } }) {
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
}
`
const getHomeSliderQuery = (id, postsPerPage = 10) => {
  return query
    .replaceAll('$id', id)
    .replaceAll('$postsPerPage', postsPerPage.toString())
}

export default getHomeSliderQuery
