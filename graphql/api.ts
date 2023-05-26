import { TermType } from '@utils/interfaces/data'
import { mapPage, mapPost, mapTerm } from '@utils/mapping'
import { outputErrors } from '@utils/outputErrors'
import secteurs from '@utils/data/secteurs.json'
import regions from '@utils/data/regions.json'
import tags from '@utils/data/tags.json'
import categories from '@utils/data/categories.json'
import { gql } from '@apollo/client'
import client from '@graphql/client'
import { PER_PAGE } from '@utils/constants'
import { queryHome } from './homeQueries'

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
    if (type === TermType.Secteur) {
      const secteur = secteurs.find((secteur) => secteur.slug === term)
      if (!secteur) return null
      const secteurId = secteur?.id.toString()
      const termPosts = await performSearch({
        page,
        secteur: secteurId,
      })
      if (termPosts)
        return {
          ...mapTerm({ ...secteur, posts: termPosts?.posts }),
          secteur: secteurId,
        }
    } else if (type === TermType.Region) {
      const region = regions.find((region) => region.slug === term)
      if (!region) return null
      const regionId = region?.id.toString()
      const termPosts = await performSearch({
        page,
        region: regionId,
      })
      if (termPosts)
        return {
          ...mapTerm({ ...region, posts: termPosts?.posts }),
          region: regionId,
        }
    } else if (type === TermType.Tag) {
      const tag = tags.find((tag) => tag.slug === term)
      if (!tag) return null
      const tagId = tag.id.toString()
      const termPosts = await performSearch({
        page,
        tag: tagId,
      })
      if (termPosts)
        return { ...mapTerm({ ...tag, posts: termPosts?.posts }), tag: tagId }
    } else {
      const category = categories.find((category) => category.slug === term)
      if (!category) return null
      const categoryId = category.id.toString()
      const termPosts = await performSearch({
        page,
        category: categoryId,
      })
      if (termPosts)
        return {
          ...mapTerm({ ...category, posts: termPosts?.posts }),
          category: categoryId,
        }
    }
  } catch (err) {
    return outputErrors(err)
  }
}
export const getPostsHome = async () => {
  try {
    const data = await loadFromWPGraphQL(queryHome)
    const terms = data
      ? Object.values(data).map(({ posts, name, uri }) => ({
          title: name,
          href: uri,
          posts: posts.nodes?.map((post) => mapPost(post)),
        }))
      : null
    return { terms }
  } catch (error) {
    outputErrors(error)
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
    posts(first: 1
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
