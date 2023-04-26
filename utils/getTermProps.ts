import { getTermAndPosts } from '@graphql/api'
import { getLast, isEmpty, prev } from '@utils/manipulateArray'
import addLayoutData from '@utils/addLayoutData'

export const getTermProps = async (params, type, client) => {
  const pageIndex = params?.slug?.findIndex((param) => param === 'page')
  const resolvedSlug =
    pageIndex && pageIndex !== -1
      ? params.slug[prev(pageIndex)]
      : getLast(params.slug)
  const currentPage =
    pageIndex && pageIndex !== -1 ? parseInt(getLast(params.slug)) : 1

  const term = await getTermAndPosts({
    term: resolvedSlug,
    type,
    page: currentPage,
    client,
  })

  if (isEmpty(term)) return { notFound: true }

  const { seo, count, name, posts, uri } = term
  return addLayoutData({
    title: name,
    posts,
    uri,
    seo,
    count,
    currentPage,
  })
}
