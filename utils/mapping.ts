import { Page, Post, Seo, Term } from '@utils/interfaces'
import { isEmpty, preventUndefined } from './manipulateArray'
import { outputErrors } from './outputErrors'

export const mapSeo = (seo): Seo => {
  if (isEmpty(seo)) return null

  try {
    return {
      breadcrumbs: preventUndefined(seo.breadcrumbs),
      canonical: preventUndefined(seo.canonical),
      metaDesc: preventUndefined(seo.metaDesc),
      metaKeywords: preventUndefined(seo.metaKeywords),
      metaRobotsNofollow: preventUndefined(seo.metaRobotsNofollow),
      metaRobotsNoindex: preventUndefined(seo.metaRobotsNoindex),
      opengraphAuthor: preventUndefined(seo.opengraphAuthor),
      opengraphDescription: preventUndefined(seo.opengraphDescription),
      opengraphImage: preventUndefined(seo.opengraphImage?.sourceUrl),
      opengraphModifiedTime: preventUndefined(seo.opengraphModifiedTime),
      opengraphPublishedTime: preventUndefined(seo.opengraphPublishedTime),
      opengraphPublisher: preventUndefined(seo.opengraphPublisher),
      opengraphSiteName: preventUndefined(seo.opengraphSiteName),
      opengraphTitle: preventUndefined(seo.opengraphTitle),
      opengraphType: preventUndefined(seo.opengraphType),
      opengraphUrl: preventUndefined(seo.opengraphUrl),
      schema: preventUndefined(seo.schema?.raw),
      title: preventUndefined(seo.title),
      twitterDescription: preventUndefined(seo.twitterDescription),
      twitterImage: preventUndefined(seo.twitterImage?.sourceUrl),
      twitterTitle: preventUndefined(seo.twitterTitle),
    }
  } catch (err) {
    return outputErrors(err)
  }
}
export const mapPost = (post): Post => {
  if (isEmpty(post)) return null
  try {
    const categories = post.categories?.nodes?.map((term) => mapTerm(term))
    const secteurs = post.secteurs?.nodes?.map((term) => mapTerm(term))
    const regions = post.regions?.nodes?.map((term) => mapTerm(term))

    return {
      id: preventUndefined(post.databaseId),
      title: preventUndefined(post.title),
      image: preventUndefined(post.featuredImage?.node.sourceUrl),
      date: preventUndefined(post.date),
      excerpt: preventUndefined(post.excerpt),
      content: preventUndefined(post.content),
      uri: preventUndefined(post.uri),
      categories: preventUndefined(categories),
      secteurs: preventUndefined(secteurs),
      regions: preventUndefined(regions),
      seo: mapSeo(preventUndefined(post.seo)),
    }
  } catch (err) {
    return outputErrors(err)
  }
}
export const mapTerm = (term): Term => {
  if (isEmpty(term)) return null
  try {
    const posts = term.posts?.nodes?.map((post) => mapPost(post))

    return {
      id: preventUndefined(term.databaseId),
      name: preventUndefined(term.name),
      count: preventUndefined(
        term.posts?.pageInfo?.offsetPagination?.total || term.count
      ),
      slug: preventUndefined(term.slug),
      uri: preventUndefined(term.uri),
      posts: preventUndefined(posts),
      seo: mapSeo(preventUndefined(term.seo)),
    }
  } catch (err) {
    return outputErrors(err)
  }
}

export const mapPage = (page): Page => {
  if (isEmpty(page)) return null
  try {
    return {
      id: preventUndefined(page.databaseId),
      title: preventUndefined(page.title),
      content: preventUndefined(page.content),
      seo: mapSeo(preventUndefined(page.seo)),
    }
  } catch (err) {
    return outputErrors(err)
  }
}
