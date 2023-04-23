import { TermType } from '@utils/interfaces'
import { getFirst, isEmpty, preventUndefined } from '@utils/manipulateArray'
import { mapPage, mapPost, mapTerm } from '@utils/mapping'
import { outputErrors } from '@utils/outputErrors'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { gql } from '@apollo/client'

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL
const PER_PAGE = parseInt(process.env.NEXT_PUBLIC_PER_PAGE)

const fetchAPI = async (query = '', variables: Record<string, string> = {}) => {
  const headers = { 'Content-Type': 'application/json' }

  const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
  })

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }
  const body = query
    .replaceAll('"$id"', `"${variables?.id}"`)
    .replaceAll('"$idType"', `"${variables?.idType}"`)

  try {
    // WPGraphQL Plugin must be enabled
    const { data } = await client.query({
      query: gql`
        ${body}
      `,
    })

    return data
  } catch (err) {
    console.error(err)
    console.error(body)
  }
  return
}
const term_response = `
  name
  uri
`
const terms_response = `nodes {
  ${term_response}
}`
const post_response = (isPostPage = false) => `
${isPostPage ? 'databaseId' : ''}  
title
  ${isPostPage ? 'content slug' : 'excerpt'}
  date
  categories(first: ${isPostPage ? 10 : 1}) {
    nodes {
    ${isPostPage ? 'databaseId' : ''}
    ${term_response} 
    }
  }
  secteurs(first: ${
    isPostPage ? 10 : process.env.NEXT_PUBLIC_MAX_TERMS_BY_POST
  }){
    ${terms_response}
  }
  regions(first: ${
    isPostPage ? 10 : process.env.NEXT_PUBLIC_MAX_TERMS_BY_POST
  }){
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
  try {
    const { post } = await fetchAPI(
      `
      query PostBySlug {
        post(id: "$id", idType: URI) {
          ${seo_response}
          ${post_response(true)}
        }
      }
    `,
      {
        id: slug,
      }
    )
    const { posts } = await fetchAPI(
      `
      query SimilarPosts {
        posts(first: 3, where: { notIn: [${post.databaseId}] categoryId: ${
        getFirst(post.categories.nodes).databaseId
      } orderby: { field: DATE, order: DESC } }) {
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
    `
    )
    // Filter out the main post
    const mappedPosts = preventUndefined(
      posts.nodes.map((post) => mapPost(post))
    )

    return { post: mapPost(post), posts: mappedPosts }
  } catch (err) {
    return outputErrors(err)
  }
}

export const getTermAndPosts = async ({ term, type, page = 1 }) => {
  try {
    const typeLower = type.toLowerCase()

    const data = await fetchAPI(
      `
      query TermAndPosts {
        ${typeLower} (id: "$id", idType: SLUG) {
          databaseId
          name
          count
          slug
          uri
          ${seo_response}
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

        return mapTerm({ ...taxonomy, posts, count })
      } else if (type === TermType.Region) {
        const { posts, count } = await performSearch({
          page,
          region: taxonomy.databaseId,
        })

        return mapTerm({ ...taxonomy, posts, count })
      } else if (type === TermType.Tag) {
        const { posts, count } = await performSearch({
          page,
          tag: taxonomy.databaseId,
        })

        return mapTerm({ ...taxonomy, posts, count })
      } else if (type === TermType.Category) {
        const { posts, count } = await performSearch({
          page,
          category: taxonomy.databaseId,
        })
        return mapTerm({ ...taxonomy, posts, count })
      }
    }
    return null
  } catch (err) {
    return outputErrors(err)
  }
}
export const getPostsHome = async ({ term, type, postsPerPage }) => {
  const typeLower = type.toLowerCase()
  const posts_query = `posts(first: ${postsPerPage}, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {  
        title
        uri
        featuredImage {
          node {
            sourceUrl
          }
        } 
      }
    }`
  try {
    const data = await fetchAPI(
      `
      query PostsHome {
        ${typeLower} (id: "$id", idType: SLUG) {
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

    const response = data[typeLower]
    const posts = response?.posts?.nodes?.map((post) => mapPost(post))
    return mapTerm({ ...response, posts })
  } catch (err) {
    return outputErrors(err)
  }
}
export const getTerms = async (type) => {
  try {
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
    return response
  } catch (err) {
    return outputErrors(err)
  }
}

export const getCategories = async () => {
  try {
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
    const response = data?.categories?.nodes?.map((category) =>
      mapTerm(category)
    )
    return response
  } catch (err) {
    return outputErrors(err)
  }
}

export const getRegions = async () => {
  try {
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
  } catch (err) {
    return outputErrors(err)
  }
}

export const getPage = async (slug) => {
  try {
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

    const response = mapPage(data?.page)
    return response
  } catch (err) {
    return outputErrors(err)
  }
}
export const getAllPages = async () => {
  try {
    const data = await fetchAPI(`
      query pages {
        pages (first: 100) { 
          nodes {     
            slug
          }
        }
      }
    `)
    const response = data?.pages?.nodes
    return response
  } catch (err) {
    return outputErrors(err)
  }
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
  const category_query = `categoryId: ${!isEmpty(category) ? category : 16},`
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
  try {
    const { posts } = await fetchAPI(query)
    const mappedPosts = posts?.nodes?.map((post) => mapPost(post))
    const response = {
      posts: preventUndefined(mappedPosts),
      count: preventUndefined(posts?.pageInfo?.offsetPagination?.total),
    }

    return response
  } catch (err) {
    return outputErrors(err)
  }
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
  try {
    const data = await fetchAPI(query)
    const response = data?.posts?.nodes

    return preventUndefined(response)
  } catch (err) {
    return outputErrors(err)
  }
}

export const getPubs = async () => {
  try {
    const data = await fetchAPI(
      `
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
    )

    const pubs = data?.posts?.nodes?.map((pub) => mapPost(pub))
    const pub1 = pubs.filter(
      (pub) =>
        pub.categories.findIndex((category) => category.id === 192) !== -1
    )
    const pub2 = pubs.filter(
      (pub) =>
        pub.categories.findIndex((category) => category.id === 193) !== -1
    )
    const pub3 = pubs.filter(
      (pub) =>
        pub.categories.findIndex((category) => category.id === 194) !== -1
    )
    const partners = pubs.filter(
      (pub) => pub.categories.findIndex((category) => category.id === 88) !== -1
    )
    const sponsored = pubs.filter(
      (pub) =>
        pub.categories.findIndex((category) =>
          [192, 193, 194, 88].includes(category.id)
        ) === -1
    )

    return { pub1, pub2, pub3, partners, sponsored }
  } catch (err) {
    return outputErrors(err)
  }
}

export const getPartners = async () => {
  try {
    const data = await fetchAPI(
      `
      query Partners {
        posts(first: 10, where: { 
          categoryId: 88
          orderby: { field: DATE, order: DESC } }) {
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
    `
    )

    const partners = data?.posts?.nodes?.map((pub) => mapPost(pub))

    return partners
  } catch (err) {
    return outputErrors(err)
  }
}

export const getSponsored = async () => {
  try {
    const data = await fetchAPI(
      `
      query Sponsored {
        posts(first: 20, where: { 
          tagId: "85"
          orderby: { field: DATE, order: DESC } }) {
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
    `
    )

    const sponsored = data?.posts?.nodes?.map((pub) => mapPost(pub))

    return sponsored
  } catch (err) {
    return outputErrors(err)
  }
}
