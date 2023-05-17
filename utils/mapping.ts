import { Page, Post, Seo, Term } from '@utils/interfaces/data'
import { isEmpty, preventUndefined } from '@utils/manipulateArray'
import { outputErrors } from '@utils/outputErrors'

const replaceUrl = (url) =>
  preventUndefined(url?.replace('www.jobrapide.org', 'v2.jobrapide.org'))

const getOptimizedImageUrl = (url: string) => {
  if (
    !url ||
    (!url.includes('.png') &&
      !url.includes('.jpg') &&
      !url.includes('.jpeg') &&
      !url.includes('.webp'))
  )
    return '/images/logo.webp'
  const imageUrl = preventUndefined(
    url?.replace(
      'wp-content/uploads',
      'wp-content/webp-express/webp-images/uploads'
    )
  )
  return imageUrl ? `${imageUrl}.webp` : null
}
export const mapSeo = (seo): Seo => {
  if (isEmpty(seo)) return null

  try {
    return {
      breadcrumbs: preventUndefined(seo.breadcrumbs),
      canonical: replaceUrl(seo.canonical),
      metaDesc: preventUndefined(seo.metaDesc),
      metaKeywords: preventUndefined(seo.metaKeywords),
      metaRobotsNofollow: preventUndefined(seo.metaRobotsNofollow),
      metaRobotsNoindex: preventUndefined(seo.metaRobotsNoindex),
      opengraphAuthor: preventUndefined(seo.opengraphAuthor),
      opengraphDescription: preventUndefined(seo.opengraphDescription),
      opengraphImage: getOptimizedImageUrl(seo.opengraphImage?.sourceUrl),
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
      twitterImage: replaceUrl(seo.twitterImage?.sourceUrl),
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

    return {
      id: preventUndefined(post.databaseId),
      title: preventUndefined(post.title),
      image: getOptimizedImageUrl(post.featuredImage?.node?.sourceUrl),
      date: preventUndefined(post.date),
      excerpt: preventUndefined(post.excerpt),
      content: preventUndefined(
        post?.content
          ?.replaceAll('uploads', 'webp-express/webp-images/uploads')
          .replaceAll('.png', '.png.webp')
          .replaceAll('.jpg', '.jpg.webp')
          .replaceAll('.jpeg', '.jpeg.webp')
      ),
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
    return {
      id: preventUndefined(term.databaseId),
      name: preventUndefined(term.name),
      count: preventUndefined(term.count),
      slug: preventUndefined(term.slug),
      uri: preventUndefined(term.uri),
      parentId: preventUndefined(term.parentDatabaseId),
      posts: preventUndefined(term.posts),
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
