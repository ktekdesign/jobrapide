export const sidebarQuery = `
      query Sidebar {
        pubs: posts(first: 20, where: { categoryIn: ["192", "193", "194", "88"]
          orderby: { field: DATE, order: DESC } }) {
          nodes {  
            content
            uri
              featuredImage {
                node {
                  sourceUrl
                }
              }
            categories{
              nodes {
                databaseId
              }
            }
            } 
          }
        sponsored: posts(first: 10, where: { tagId: "85"
            orderby: { field: DATE, order: DESC } }) {
            nodes {  
              content
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
