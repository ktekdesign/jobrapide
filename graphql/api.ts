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
const post_response = `id
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
}`
const pageInfoSearch = `pageInfo {
  offsetPagination {
      total
  }
}`
const posts_response = `
  nodes {
    ${post_response}
  }`
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

export async function getPostAndMorePosts(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ${seo_response}
        ${post_response}
      }
      posts(first: 4, where: { orderby: { field: DATE, order: DESC } }) {
          ${posts_response}
      }
    }
  `,
    {
      variables: {
        id: slug,
        idType: 'URI',
      },
    }
  )

  // Filter out the main post
  data.posts = data.posts.nodes.filter((post) => post.slug !== slug)
  // If there are still 4 posts, remove the last one
  if (data.posts.length > 3) data.posts.pop()
  const post = mapPost(data.post)
  const posts = data.posts.map((post) => mapPost(post))
  return { post: post, posts: posts }
}

export async function getTermAndPosts(term, type, page = 1) {
  const posts_query =
    page === 1
      ? `posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
    ${posts_response}   
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
        ${seo_response}
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
      ${type} (first: 100) {
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
export async function getRegions() {
  const data = await fetchAPI(
    `
    query Regions {
      regions (first: 100) {
        pageInfo {
          endCursor
        }
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
  const data_last = await fetchAPI(
    `
    query Regions_last {
      regions (first: 100, after: "${data?.regions?.pageInfo?.endCursor}") {
        pageInfo {
          endCursor
        }
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
  const response = data.regions?.nodes?.map((term) => mapTerm(term))
  const response_last = data_last.regions?.nodes?.map((term) => mapTerm(term))

  return [...response, ...response_last]
}
export async function getPage(uri) {
  const data = await fetchAPI(`
  query page {
    page (id: "${uri}", idType: URI) {      
        id
        databaseId
        title
        content
        ${seo_response}
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
  isSearch = false,
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
      ${isSearch ? `${pageInfoSearch}` : ''}
      ${posts_response}
    }
  }
  `)

  const response = data?.posts?.nodes?.map((post) => mapPost(post))

  return isSearch
    ? {
        posts: response || [],
        count: data.posts?.pageInfo?.offsetPagination?.total || 0,
      }
    : response
}
