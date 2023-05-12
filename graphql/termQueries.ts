const seo_response = `
  seo {
    breadcrumbs {
        text
        url
    }
    canonical
    metaDesc
    metaKeywords
    metaRobotsNofollow
    metaRobotsNoindex
    opengraphAuthor
    opengraphDescription
    opengraphImage { 
        sourceUrl
    }
    opengraphModifiedTime
    opengraphPublishedTime
    opengraphPublisher
    opengraphSiteName
    opengraphTitle
    opengraphType
    opengraphUrl
    schema {
        raw
    }
    title
    twitterDescription
    twitterImage {
        sourceUrl
    }
    twitterTitle
  }
`

export const secteursQuery = `query secteursQuery {
  secteurs (first: 100) {
    nodes {
      databaseId
      name
      slug
      uri
      ${seo_response}
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
      ${seo_response}
    }
  }
}
`
export const categoriesQuery = `
  query Category {
    categories (first: 30, where: { hideEmpty: true, excludeTree:["88", "192", "193", "194", "349"] }) {
      nodes {
        databaseId
        parentDatabaseId
        name
        slug
        uri
        ${seo_response}
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
        ${seo_response}
      }
    }
    last: regions (first: 100, after: "YXJyYXljb25uZWN0aW9uOjMxNQ==") {
      nodes {
        databaseId
        name
        slug
        uri
        ${seo_response}
      }
    }
  }
`

export const categoriesWhithoutChildrenQuery = `
  query Category {
    categories (where: { hideEmpty: true, childless: true, excludeTree:["16", "88", "192", "193", "194", "349"] }) {
      nodes {
        slug
      }
    }
  }
`
export const tagsQuery = `query tagsQuery {
  tags (first: 100) {
    nodes {
      databaseId
      name
      slug
      uri
      ${seo_response}
    }
  }
}
`
