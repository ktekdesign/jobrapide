import { mapPost, mapTerm } from '@utils/mapping'

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
const post_response = `pageInfo {
  hasNextPage
  endCursor
}

  nodes {
    id
    databaseId
    title
    excerpt
    content
    slug
    date
    categories{
      
        nodes {
          name
          uri
          databaseId
        }
      
    }
    secteurs{
      
        nodes {
          name
          uri
          databaseId
        }
      
    }
    regions{
      
        nodes {
          name
          uri
          databaseId
        }
      
    }
    uri
    featuredImage {
      node {
        sourceUrl
      }
    }
  }`
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

export async function getAllPagesWithSlug() {
  const data = await fetchAPI(`
    {
      pages(first: 10000) {
        
          nodes {
            slug
          }
        
      }
    }
  `)
  return data?.pages
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
          nodes {
            name,
            uri
            id
          }
      }
      secteurs{
          nodes {
            name
            uri
            id
          }
      }
      regions{
          nodes {
            name
            uri
            id
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
          nodes {
            ...PostFields
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
    const revision = data.post.revisions.nodes[0]

    if (revision) Object.assign(data.post, revision)
    delete data.post.revisions
  }

  // Filter out the main post
  data.posts.nodes = data.posts.nodes.filter((post) => post.slug !== slug)
  // If there are still 3 posts, remove the last one
  if (data.posts.nodes.length > 2) data.posts.nodes.pop()
  const response = data.posts.nodes.map((post) => mapPost(post))
  return response?.nodes
}

export async function getTermAndPosts(term, type, page = 1) {
  const posts_query =
    page === 1
      ? `posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
    ${post_response}   
  }`
      : ''
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
  			${posts_query}
  		}
    }
  `
  )
  const taxonomy = mapTerm(data[type])

  if (page > 1) {
    if (type === 'category') {
      const category = await performSearch({
        page,
        category: taxonomy.id,
      })
      taxonomy.posts = category
    } else if (type === 'secteur') {
      const secteur = await performSearch({
        page,
        secteur: taxonomy.id,
      })
      taxonomy.posts = secteur
    } else if (type === 'region') {
      const region = await performSearch({ page, region: taxonomy.id })
      taxonomy.posts = region
    } else if (type === 'tag') {
      const tag = await performSearch({ page, tag: taxonomy.id })
      taxonomy.posts = tag
    }
  }
  const response = taxonomy

  return response
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
  const response = data[type]?.nodes?.map((term) => mapTerm(term))
  return response
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
  const response = data?.categories?.nodes?.map((category) => mapTerm(category))
  return response
}

export async function getPage(uri) {
  const data = await fetchAPI(`
  query page {
    page (id: "${uri}", idType: URI) {      
        id
        databaseId
        title
        content
      }
    }
  `)
  return data?.page
}

export async function performSearch({
  page = 1,
  search = '',
  category = null,
  secteur = null,
  region = null,
  tag = null,
}) {
  const wherePagination =
    page > 1 ? `offsetPagination: { size: 10, offset: ${10 * page - 10}}` : ''
  const category_query = category
    ? `{
    terms: ["${category}"],
    taxonomy: CATEGORY,
    operator: IN,
    field: ID
  },`
    : ''
  const secteur_query = secteur
    ? `{
    terms: ["${secteur}"],
    taxonomy: SECTEUR,
    operator: IN,
    field: ID
  },`
    : ''
  const region_query = region
    ? `{
    terms: ["${region}"],
    taxonomy: REGION,
    operator: IN,
    field: ID
  },`
    : ''
  const tag_query = tag
    ? `{
    terms: ["${tag}"],
    taxonomy: TAG,
    operator: IN,
    field: ID
  },`
    : ''
  const data = await fetchAPI(`
  query search{
    posts(
      where: {
        search: "${search}"
        ${wherePagination}
        taxQuery: {
          relation: OR,
          taxArray: [
            ${category_query}
            ${secteur_query}
            ${region_query}
            ${tag_query}
          ]
        }
      }
    ){
      ${post_response}
    }
  }
  `)

  const response = data?.posts?.nodes?.map((post) => mapPost(post))
  return response
}
