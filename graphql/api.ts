import { isEmpty, preventUndefined } from '@utils/manipulateArray'
import { mapPost, mapTerm } from '@utils/mapping'

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL

const fetchAPI = async (query = '', variables: Record<string, string> = {}) => {
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
  return preventUndefined(json.data)
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

export const getPostAndMorePosts = async (slug) => {
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
      id: slug,
      idType: 'URI',
    }
  )

  // Filter out the main post
  data.posts = data.posts.nodes.filter((post) => post.slug !== slug)
  // If there are still 4 posts, remove the last one
  if (data.posts.length > 3) data.posts.pop()
  const post = mapPost(data.post)
  const posts = preventUndefined(data.posts.map((post) => mapPost(post)))
  return { post: post, posts: posts }
}

export const getTermAndPosts = async ({ term, type, page = 1 }) => {
  const typeLower = type.toLowerCase()
  const posts_query =
    page === 1
      ? `posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
    ${posts_response}   
  }`
      : ''
  const data = await fetchAPI(
    `
    query TermAndPosts($id: ID!, $idType: ${type}IdType!) {
      ${typeLower} (id: $id, idType: $idType) {
        id
        databaseId
        name
        count
        slug
        uri
        ${seo_response}
        ${type !== 'Tag' ? 'parentDatabaseId' : ''}   
  			${posts_query}
  		}
    }
  `,
    {
      id: term,
      idType: 'URI',
    }
  )
  const taxonomy = mapTerm(data[typeLower])

  if (page > 1 && !isEmpty(taxonomy)) {
    switch (type) {
      case 'Secteur':
        taxonomy.posts = await performSearch({
          page,
          secteur: taxonomy.id,
        })
        break
      case 'Region':
        taxonomy.posts = await performSearch({ page, region: taxonomy.id })
        break
      case 'Tag':
        taxonomy.posts = await performSearch({ page, tag: taxonomy.id })
        break
      default:
        taxonomy.posts = await performSearch({
          page,
          category: taxonomy.id,
        })
        break
    }
  }

  return taxonomy
}
export const getTerms = async (type) => {
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
  return preventUndefined(response)
}

export const getCategories = async () => {
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
  return preventUndefined(response)
}

export const getRegions = async () => {
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
  const response = preventUndefined(
    data.regions?.nodes?.map((term) => mapTerm(term))
  )
  const response_last = preventUndefined(
    data_last.regions?.nodes?.map((term) => mapTerm(term))
  )

  return [...response, ...response_last]
}

export const getPage = async (uri) => {
  const data = await fetchAPI(`
  query page {
    page (id: "${uri}", idType: URI) {      
        databaseId
        title
        content
        ${seo_response}
      }
    }
  `)
  return data?.page
}

export const performSearch = async ({
  page = 1,
  search = '',
  category = null,
  secteur = null,
  region = null,
  tag = null,
  isSearch = false,
}) => {
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
        posts: preventUndefined(response),
        count: preventUndefined(data.posts?.pageInfo?.offsetPagination?.total),
      }
    : preventUndefined(response)
}
