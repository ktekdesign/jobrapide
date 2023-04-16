const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL

async function fetchAPI(query = '', { variables }: Record<string, any> = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    console.error(query)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  )
  return data.post
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return data?.posts
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            uri
            date
            categories {
              edges {
                node {
                  name,
                  uri
                }
              }
            }
            tags {
              edges {
                node {
                  name,
                  uri
                }
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.posts
}

export async function getPostAndMorePosts(
  slug,
  preview = false,
  previewData = null
) {
  const postPreview = preview && previewData?.post
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug))
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug
  const isDraft = isSamePost && postPreview?.status === 'draft'
  const isRevision = isSamePost && postPreview?.status === 'publish'
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      id
      title
      excerpt
      slug
      date
      uri
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name,
            uri
            id
          }
        }
      }
      secteurs{
        edges {
          node {
            name
            uri
            id
          }
        }
      }
      regions{
        edges {
          node {
            name
            uri
            id
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ''
        }
      }
      posts(first: 4, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? 'DATABASE_ID' : 'URI',
      },
    }
  )

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node

    if (revision) Object.assign(data.post, revision)
    delete data.post.revisions
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug)
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop()

  return data
}

export async function getTermAndPosts(term, type) {
  const data = await fetchAPI(
    `
    query TermAndPosts {
      ${type} (id: "${term}", idType: URI) {
        id
        databaseId
        name
        count
        slug
        uri
        ${type !== 'tag' ? 'parentDatabaseId' : ''}
  			posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              databaseId
              title
              excerpt
              slug
              date
              categories{
                edges {
                  node {
                    name
                    uri
                    id
                  }
                }
              }
              secteurs{
                edges {
                  node {
                    name
                    uri
                    id
                  }
                }
              }
              regions{
                edges {
                  node {
                    name
                    uri
                    id
                  }
                }
              }
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
    }
  `
  )

  return data
}
export async function getTerms(type) {
  const data = await fetchAPI(
    `
    query Terms {
      ${type} (first: 300) {
        nodes {
          id
          databaseId
          name
          uri
          count
        }
      }
    }
  `
  )

  return data
}

export async function getCategories() {
  const data = await fetchAPI(
    `
    query Category {
      categories (where: { parent: 16 }) {
        nodes {
          id
          databaseId
          name
          uri
          count
        }
      }
    }
  `
  )

  return data
}
