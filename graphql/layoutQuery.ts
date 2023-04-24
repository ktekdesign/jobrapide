export const layoutQuery = `
      query Pubs {
        posts(first: ${process.env.NEXT_PUBLIC_MAX_PUBS}, where: { 
          taxQuery: {
            relation: OR,
            taxArray: [
              {
                includeChildren: true
                terms: ["192", "193", "194", "88"]
                taxonomy: CATEGORY
                operator: IN
                field: ID
              },
              {
                includeChildren: true
                terms: ["85"]
                taxonomy: TAG
                operator: IN
                field: ID
              }
            ]
          }
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
            categories{
              nodes {
                databaseId
              }
            }
            } 
          }
        }
    `
