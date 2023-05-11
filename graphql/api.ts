import { TermType } from '@utils/interfaces/data'
import { isEmpty } from '@utils/manipulateArray'
import { mapPage, mapPost, mapTerm } from '@utils/mapping'
import { outputErrors } from '@utils/outputErrors'
import { gql } from '@apollo/client'
import client from '@graphql/client'
import {
  categoriesQuery,
  categoriesWhithoutChildrenQuery,
} from '@graphql/termQueries'
import { filterTerms } from '@utils/filterTerms'
import { MAX_PAGES } from '@utils/constants'

const PER_PAGE = parseInt(process.env.NEXT_PUBLIC_PER_PAGE)

export const loadFromWPGraphQL = async (
  query = '',
  variables: Record<string, string> = {}
) => {
  const body = query
    .replaceAll('"$id"', `"${variables?.id}"`)
    .replaceAll('"$idType"', `"${variables?.idType}"`)

  try {
    // WPGraphQL Plugin must be enabled
    const data = await client.query({
      query: gql`
        ${body}
      `,
    })

    return data?.data
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
  ${
    isPostPage
      ? `
  secteurs(first: 10){
    ${terms_response}
  }
  regions(first: 10){
    ${terms_response}
  }`
      : ''
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
    const postData = await loadFromWPGraphQL(
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

    return { post: mapPost(postData?.post) }
  } catch (err) {
    return outputErrors(err)
  }
}
export const getTermAndPosts = async ({ term, type, page = 1 }) => {
  try {
    const typeLower = type.toLowerCase()

    const data = await loadFromWPGraphQL(
      `
      query ${typeLower}${term.replaceAll('-', '')}${page} {
        ${typeLower} (id: "$id", idType: SLUG) {
          databaseId
          name
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

    if (!isEmpty(data)) {
      const { [typeLower]: taxonomy } = data
      const termId = taxonomy.databaseId

      if (type === TermType.Secteur) {
        const termPosts = await performSearch({
          page,
          secteur: termId,
        })
        if (termPosts) {
          const { posts } = termPosts
          return { ...mapTerm({ ...taxonomy, posts }), secteur: termId }
        }
      } else if (type === TermType.Region) {
        const termPosts = await performSearch({
          page,
          region: termId,
        })
        if (termPosts) {
          const { posts } = termPosts
          return { ...mapTerm({ ...taxonomy, posts }), region: termId }
        }
      } else if (type === TermType.Tag) {
        const termPosts = await performSearch({
          page,
          tag: termId,
        })
        if (termPosts) {
          const { posts } = termPosts
          return { ...mapTerm({ ...taxonomy, posts }), tag: termId }
        }
      } else {
        const termPosts = await performSearch({
          page,
          category: termId,
        })
        if (termPosts) {
          const { posts } = termPosts
          return { ...mapTerm({ ...taxonomy, posts }), category: termId }
        }
      }
    }
    return null
  } catch (err) {
    return outputErrors(err)
  }
}

export const getTerms = async (type) => {
  try {
    const data = await loadFromWPGraphQL(
      `
      query ${type.replaceAll('-', '')} {
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
    if (data) {
      const { [type]: response } = data
      return response?.nodes?.map((term) => mapTerm(term))
    }
    return null
  } catch (err) {
    return outputErrors(err)
  }
}

export const getCategories = async () => {
  try {
    const data = await loadFromWPGraphQL(categoriesQuery)

    return data?.categories?.nodes?.map((category) => mapTerm(category))
  } catch (err) {
    return outputErrors(err)
  }
}
export const getCategoriesWithoutChildren = async () => {
  try {
    const data = await loadFromWPGraphQL(categoriesWhithoutChildrenQuery)

    return data?.categories?.nodes?.map((category) => mapTerm(category))
  } catch (err) {
    return outputErrors(err)
  }
}
export const getRegions = async () => {
  try {
    const data = await loadFromWPGraphQL(`query Region {
      regions (first: 10) {
        nodes {
          databaseId
          name
          slug
          uri
        }
      }
    }`)
    return filterTerms(data)
  } catch (err) {
    return outputErrors(err)
  }
}

export const getSecteurs = async () => {
  try {
    const data = await loadFromWPGraphQL(`query Secteur {
      secteurs (first: 10) {
        nodes {
          databaseId
          name
          slug
          uri
        }
      }
    }`)
    return filterTerms(data)
  } catch (err) {
    return outputErrors(err)
  }
}

export const getPage = async (slug) => {
  try {
    const data = await loadFromWPGraphQL(
      `
      query page${slug.replaceAll('-', '').replaceAll('/', '')} {
        page (id: "${slug}", idType: URI) {      
          databaseId
          title
          content
          ${seo_response}
        }
      }
    `
    )

    return mapPage(data?.page)
  } catch (err) {
    return outputErrors(err)
  }
}

export const performSearch = async ({
  page = 1,
  search,
  category,
  secteur,
  region,
  tag,
}: {
  page?: number
  search?: string
  category?: string
  secteur?: string
  region?: string
  tag?: string
}) => {
  const wherePagination = `offsetPagination: { size: ${PER_PAGE}, offset: ${
    PER_PAGE * page - PER_PAGE
  }}`
  const category_query = `categoryId: ${category || 16},`
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
  query Search${category || 16}${secteur || ''}${region || ''}${page} {
    posts(first: 10
      where: {
        ${search ? `search: "${search}"` : ''}
        ${category_query}
        ${wherePagination}
        taxQuery: {
          relation: AND,
          taxArray: [
            ${secteur_query}
            ${region_query}
            ${tag_query}
          ]
        }
      }
    ){
      ${posts_response}
    }
  }
  `
  try {
    const data = await loadFromWPGraphQL(query)

    return {
      posts: data?.posts?.nodes?.map((post) => mapPost(post)),
    }
  } catch (err) {
    return outputErrors(err)
  }
}

export const getTermPostsCount = async ({
  category,
  secteur,
  region,
  tag,
  search,
}: {
  category?: string
  secteur?: string
  region?: string
  tag?: string
  search?: string
}) => {
  const category_query = `categoryId: ${category || 16},`
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
  query TermTotal${category || 16}${secteur || ''}${region || ''} {
    posts(where: {
        ${search ? `search: "${search}"` : ''}
        ${category_query}
        taxQuery: {
          relation: AND,
          taxArray: [
            ${secteur_query}
            ${region_query}
            ${tag_query}
          ]
        }
      }
    ){
      ${pageInfoSearch}
    }
  }
  `
  try {
    const data = await loadFromWPGraphQL(query)

    return data?.posts?.pageInfo?.offsetPagination?.total
  } catch (err) {
    return outputErrors(err)
  }
}

export const getLatestPosts = async (category) => {
  const query = `
  query lasts{
    posts(first: ${MAX_PAGES}
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
    const data = await loadFromWPGraphQL(query)
    return data?.posts?.nodes
  } catch (err) {
    return outputErrors(err)
  }
}

export const getSearchQuery = ({
  currentPage = 1,
  search,
  category,
  secteur,
  region,
}: {
  currentPage?: number
  search?: string
  category?: string
  secteur?: string
  region?: string
}) => {
  const wherePagination = `offsetPagination: { size: ${PER_PAGE}, offset: ${
    PER_PAGE * currentPage - PER_PAGE
  }}`
  const category_query = `categoryId: ${category || 16},`
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

  return `
  query Search${category || 16}${secteur || ''}${region || ''}${currentPage} {
    posts(first: 10
      where: {
        ${search ? `search: "${search}"` : ''}
        ${category_query}
        ${wherePagination}
        taxQuery: {
          relation: AND,
          taxArray: [
            ${secteur_query}
            ${region_query}
          ]
        }
      }
    ){
      ${posts_response}
    }
  }
  `
}
