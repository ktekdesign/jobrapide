export const queryHome = `
query PostsHomeAvis {
  avis: category (id: 17, idType: DATABASE_ID) {
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
  stage: category (id: 18, idType: DATABASE_ID) {
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
  bourse: category (id: 20, idType: DATABASE_ID) {
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
  appel: category (id: 19, idType: DATABASE_ID) {
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
  call: category (id: 64, idType: DATABASE_ID) {
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
  concours: category (id: 21, idType: DATABASE_ID) {
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
  formation: category (id: 121, idType: DATABASE_ID) {
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
  actualites: category (id: 23, idType: DATABASE_ID) {
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
  volontaire: category (id: 22, idType: DATABASE_ID) {
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
