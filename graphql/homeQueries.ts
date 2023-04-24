export const queryAvis = `
query PostsHomeAvis {
  category (id: 17, idType: DATABASE_ID) {
    name
    uri
    posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
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

export const queryStage = `
query PostsHomeStage {
  category (id: 18, idType: DATABASE_ID) {
    name
    uri
    posts(first: 5, where: { orderby: { field: DATE, order: DESC } }) {
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

export const queryBourse = `
query PostsHomeBourse {
  category (id: 20, idType: DATABASE_ID) {
    name
    uri
    posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
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

export const queryAppel = `
query PostsHomeAppel {
  category (id: 19, idType: DATABASE_ID) {
    name
    uri
    posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
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

export const queryCall = `
query PostsHomeCall {
  category (id: 64, idType: DATABASE_ID) {
    name
    uri
    posts(first: 5, where: { orderby: { field: DATE, order: DESC } }) {
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

export const queryConcours = `
query PostsHomeConcours {
  category (id: 21, idType: DATABASE_ID) {
    name
    uri
    posts(first: 5, where: { orderby: { field: DATE, order: DESC } }) {
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

export const queryFormation = `
query PostsHomeFormation {
  category (id: 121, idType: DATABASE_ID) {
    name
    uri
    posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
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

export const queryActualite = `
query PostsHomeActualite {
  category (id: 23, idType: DATABASE_ID) {
    name
    uri
    posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
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

export const queryVolontaire = `
query PostsHomeVolontaire {
  category (id: 22, idType: DATABASE_ID) {
    name
    uri
    posts(first: 5, where: { orderby: { field: DATE, order: DESC } }) {
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
