import { Page, Post, Seo, Term } from '@utils/interfaces/data'
import { isEmpty, preventUndefined } from '@utils/manipulateArray'
import { outputErrors } from '@utils/outputErrors'
import { BASE_DOMAIN, BASE_URL } from '@utils/constants'

const replaceUrl = (url) =>
  preventUndefined(url?.replace('www.jobrapide.org', BASE_DOMAIN))

export const mapSeo = (seo, image = null): Seo => {
  if (isEmpty(seo)) return null

  const breadcrumbs = preventUndefined(
    seo.breadcrumbs?.map(({ text, url }) => ({
      title: text,
      href: url.replace('https://www.jobrapide.org', BASE_URL),
    }))
  )

  try {
    return {
      breadcrumbs,
      canonical: replaceUrl(seo.canonical),
      metaDesc: preventUndefined(seo.metaDesc),
      metaKeywords: preventUndefined(seo.metaKeywords),
      metaRobotsNofollow: preventUndefined(seo.metaRobotsNofollow),
      metaRobotsNoindex: preventUndefined(seo.metaRobotsNoindex),
      opengraphAuthor: preventUndefined(seo.opengraphAuthor),
      opengraphDescription: preventUndefined(seo.opengraphDescription),
      opengraphImage: image || '/images/logo.webp',
      opengraphModifiedTime: preventUndefined(seo.opengraphModifiedTime),
      opengraphPublishedTime: preventUndefined(seo.opengraphPublishedTime),
      opengraphPublisher: preventUndefined(seo.opengraphPublisher),
      opengraphSiteName: preventUndefined(seo.opengraphSiteName),
      opengraphTitle: preventUndefined(seo.opengraphTitle),
      opengraphType: preventUndefined(seo.opengraphType),
      opengraphUrl: replaceUrl(seo.opengraphUrl),
      schema: preventUndefined(seo.schema?.raw),
      title: preventUndefined(seo.title),
      twitterDescription: preventUndefined(
        seo.twitterDescription ?? seo.opengraphDescription
      ),
      twitterImage: image || '/images/logo.webp',
      twitterTitle: preventUndefined(seo.twitterTitle ?? seo.title),
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
    const image = preventUndefined(post.featuredImage?.node?.sourceUrl)
    return {
      id: preventUndefined(post.databaseId),
      title: preventUndefined(post.title),
      image: image,
      date: preventUndefined(post.date),
      excerpt: preventUndefined(post.excerpt),
      text: preventUndefined(
        post?.content?.replaceAll('src=', 'loading="lazy" src=')
      ),
      href: preventUndefined(post.uri),
      categories: preventUndefined(categories),
      secteurs: preventUndefined(secteurs),
      regions: preventUndefined(regions),
      seo: mapSeo(post.seo, image),
    }
  } catch (err) {
    return outputErrors(err)
  }
}
export const mapTerm = (term): Term => {
  if (isEmpty(term)) return null
  try {
    return {
      id: preventUndefined(term.databaseId),
      title: preventUndefined(term.name ?? term.title),
      count: preventUndefined(term.count),
      slug: preventUndefined(term.slug),
      href: preventUndefined(term.href ?? term.uri),
      parentid: preventUndefined(term.parentDatabaseId),
      posts: preventUndefined(term.posts?.nodes?.map((post) => mapPost(post))),
      seo: mapSeo(term.seo),
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
      text: preventUndefined(page.content),
      seo: mapSeo(preventUndefined(page.seo)),
    }
  } catch (err) {
    return outputErrors(err)
  }
}
