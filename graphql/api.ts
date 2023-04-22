import { TermType } from '@utils/interfaces'
import { isEmpty, preventUndefined } from '@utils/manipulateArray'
import { mapPage, mapPost, mapTerm } from '@utils/mapping'
import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL
const PER_PAGE = parseInt(process.env.NEXT_PUBLIC_PER_PAGE)

const fetchAPI = async (query = '', variables: Record<string, string> = {}) => {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }
  const body = JSON.stringify({
    query,
    variables,
  })

  try {
    // WPGraphQL Plugin must be enabled
    const { data } = await axios.post(API_URL, body, {
      headers,
    })
    return data.data
  } catch (err) {
    console.error(err)
    console.error(query)
  }
  return
}
const terms_response = `nodes {
  name
  uri
}`
const post_response = (isPostPage = false) => `
title
excerpt
${isPostPage ? 'content slug' : ''}
date
categories{
  ${terms_response} 
}
secteurs{
  ${terms_response}
}
regions{
  ${terms_response}
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
    ${post_response()}
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
        ${post_response(true)}
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
      ? `posts(first: ${PER_PAGE}, where: { orderby: { field: DATE, order: DESC } }) {
    ${posts_response}   
  }`
      : ''
  const data = await fetchAPI(
    `
    query TermAndPosts($id: ID!) {
      ${typeLower} (id: $id, idType: SLUG) {
        databaseId
        name
        count
        slug
        uri
        ${seo_response}
        ${posts_query}
  		}
    }
  `,
    {
      id: term,
    }
  )

  const taxonomy = data[typeLower]

  if (!isEmpty(taxonomy)) {
    if (type === TermType.Secteur) {
      const { posts, count } = await performSearch({
        page,
        secteur: taxonomy.databaseId,
      })
      taxonomy.posts = posts
      taxonomy.count = count

      return mapTerm(taxonomy)
    } else if (type === TermType.Region) {
      const { posts } = await performSearch({
        page,
        region: taxonomy.databaseId,
      })
      taxonomy.posts = posts
      return mapTerm(taxonomy)
    } else if (type === TermType.Tag) {
      const { posts } = await performSearch({
        page,
        tag: taxonomy.databaseId,
      })
      taxonomy.posts = posts
      return mapTerm(taxonomy)
    } else if (type === TermType.Category && page > 1) {
      const { posts } = await performSearch({
        page,
        category: taxonomy.databaseId,
      })
      taxonomy.posts = posts
      return mapTerm(taxonomy)
    }
  }
  return mapTerm(taxonomy)
}
export const getPostsHome = async ({ term, type, isPub, postsPerPage }) => {
  const typeLower = type.toLowerCase()
  const posts_query = `posts(first: ${postsPerPage}, where: { orderby: { field: DATE, order: DESC } }) {
    nodes {  
      ${
        isPub
          ? 'content'
          : `
      title
      uri
      featuredImage {
        node {
          sourceUrl
        }
      } 
      `
      } 
    }
  }`
  const data = await fetchAPI(
    `
    query PostsHome($id: ID!) {
      ${typeLower} (id: $id, idType: SLUG) {
        name
        uri
        ${posts_query}
  		}
    }
  `,
    {
      id: term,
    }
  )
  return mapTerm(data[typeLower])
}
export const getTerms = async (type) => {
  const data = await fetchAPI(
    `
    query Terms {
      ${type} (first: 100) {
        nodes {
          databaseId
          name
          slug
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
          databaseId
          name
          slug
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
          databaseId
          name
          uri
          slug
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
        nodes {
          databaseId
          name
          uri
          slug
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

export const getPage = async (slug) => {
  const data = await fetchAPI(`
  query page {
    page (id: "${slug}", idType: URI) {      
        databaseId
        title
        content
        ${seo_response}
      }
    }
  `)
  return mapPage(data?.page)
}
export const getAllPages = async () => {
  const data = await fetchAPI(`
  query pages {
    pages (first: 100) { 
      nodes {     
        slug
      }
    }
  }
`)
  return data?.pages?.nodes
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
  const wherePagination = `offsetPagination: { size: ${PER_PAGE}, offset: ${
    PER_PAGE * page - PER_PAGE
  }}`
  const category_query = `categoryId: ${category ? category : 16},`
  const secteur_query = secteur
    ? `{
    includeChildren: true
    terms: ["${secteur}"]
    taxonomy: SECTEUR
    operator: IN
    field: ID
  },`
    : ''
  const region_query = region
    ? `{
    includeChildren: true
    terms: ["${region}"]
    taxonomy: REGION
    operator: IN
    field: ID
  }`
    : ''
  const tag_query = tag
    ? `{
    terms: ["${tag}"]
    taxonomy: TAG
    operator: IN
    field: ID
  }`
    : ''
  const query = `
  query search{
    posts(first: 10
      where: {
        ${isSearch ? `search: "${search}"` : ''}
        ${category_query}
        ${wherePagination}
        taxQuery: {
          relation: AND,
          taxArray: [
            ${!isEmpty(secteur) ? secteur_query : ''}
            ${!isEmpty(region) ? region_query : ''}
            ${!isEmpty(tag) ? tag_query : ''}
          ]
        }
      }
    ){
      ${pageInfoSearch}
      ${posts_response}
    }
  }
  `

  const data = await fetchAPI(query)
  const posts = data?.posts?.nodes?.map((post) => mapPost(post))
  const response = {
    posts: preventUndefined(posts),
    count: preventUndefined(data.posts?.pageInfo?.offsetPagination?.total),
  }
  return isSearch ? response : data
}

export const getLatestPosts = async (category) => {
  const query = `
  query lasts{
    posts(first: ${process.env.NEXT_PUBLIC_MAX_POSTS_GENERATE_PAGE}
      where: {
        categoryId: ${category}
      }
    ){
      nodes {
        uri
      }
    }
  }
  `
  const data = await fetchAPI(query)
  const response = data?.posts?.nodes

  return preventUndefined(response)
}
