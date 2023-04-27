export const sidebarHeaderQuery = `
      query SidebarHeader {
        posts(first: ${process.env.NEXT_PUBLIC_MAX_PUBS}, where: { categoryId: 193 }) {
          nodes {  
            content
            } 
          }
        }
    `
