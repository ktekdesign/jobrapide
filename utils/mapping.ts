import { Post, Seo, Term } from '@utils/interfaces'
import {
  isEmpty,
  preventArrayUndefined,
  preventNumberUndefined,
  preventObjectUndefined,
  preventStringUndefined,
} from './manipulateArray'

export const mapSeo = (seo): Seo => {
  if (isEmpty(seo)) return null

  return {
    breadcrumbs: preventArrayUndefined(seo.breadcrumbs),
    canonical: preventStringUndefined(seo.canonical),
    metaDesc: preventStringUndefined(seo.metaDesc),
    metaKeywords: preventStringUndefined(seo.metaKeywords),
    metaRobotsNofollow: preventStringUndefined(seo.metaRobotsNofollow),
    metaRobotsNoindex: preventStringUndefined(seo.metaRobotsNoindex),
    opengraphAuthor: preventStringUndefined(seo.opengraphAuthor),
    opengraphDescription: preventStringUndefined(seo.opengraphDescription),
    opengraphImage: preventStringUndefined(seo.opengraphImage?.sourceUrl),
    opengraphModifiedTime: preventStringUndefined(seo.opengraphModifiedTime),
    opengraphPublishedTime: preventStringUndefined(seo.opengraphPublishedTime),
    opengraphPublisher: preventStringUndefined(seo.opengraphPublisher),
    opengraphSiteName: preventStringUndefined(seo.opengraphSiteName),
    opengraphTitle: preventStringUndefined(seo.opengraphTitle),
    opengraphType: preventStringUndefined(seo.opengraphType),
    opengraphUrl: preventStringUndefined(seo.opengraphUrl),
    schema: preventStringUndefined(seo.schema?.raw),
    title: preventStringUndefined(seo.title),
    twitterDescription: preventStringUndefined(seo.twitterDescription),
    twitterImage: preventStringUndefined(seo.twitterImage?.sourceUrl),
    twitterTitle: preventStringUndefined(seo.twitterTitle),
  }
}
export const mapPost = (post): Post => {
  const categories = post.categories?.nodes?.map((term) => mapTerm(term))
  const secteurs = post.secteurs?.nodes?.map((term) => mapTerm(term))
  const regions = post.regions?.nodes?.map((term) => mapTerm(term))

  return {
    id: post.databaseId,
    title: post.title,
    image: preventStringUndefined(post.featuredImage?.node.sourceUrl),
    date: post.date,
    excerpt: post.excerpt,
    content: post.content,
    uri: post.uri,
    categories: preventObjectUndefined(categories),
    secteurs: preventObjectUndefined(secteurs),
    regions: preventObjectUndefined(regions),
    seo: mapSeo(preventObjectUndefined(post.seo)),
  }
}
export const mapTerm = (term): Term => {
  const posts = term?.posts?.nodes?.map((post) => mapPost(post))

  return {
    id: term.databaseId,
    name: term.name,
    count: preventNumberUndefined(term.count),
    slug: preventStringUndefined(term.slug),
    uri: preventStringUndefined(term.uri),
    parentId: preventNumberUndefined(term.parentDatabaseId),
    posts: preventObjectUndefined(posts),
    seo: mapSeo(preventObjectUndefined(term.seo)),
  }
}
