import { Page, Post, Seo, Term } from '@utils/interfaces/data'
import { isEmpty, preventUndefined } from '@utils/manipulateArray'
import { outputErrors } from '@utils/outputErrors'
import { BASE_DOMAIN, BASE_URL } from '@utils/constants'

const replaceUrl = (url) =>
  preventUndefined(url?.replace('www.jobrapide.org', BASE_DOMAIN))

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
      text: preventUndefined(
        post?.content
          ?.replaceAll('uploads', 'webp-express/webp-images/uploads')
          .replaceAll('.png', '.png.webp')
          .replaceAll('.jpg', '.jpg.webp')
          .replaceAll('.jpeg', '.jpeg.webp')
      ),
      href: preventUndefined(post.uri),
      categories: preventUndefined(categories),
      secteurs: preventUndefined(secteurs),
      regions: preventUndefined(regions),
      seo: mapSeo(post.seo),
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
      posts: preventUndefined(term.posts),
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
