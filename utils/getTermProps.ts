import { getTermAndPosts } from '@lib/api'

export const getTermProps = async (resolvedUrl, params, type) => {
  const currentPage = parseInt(params.slug.pop()) || 1
  const term = await getTermAndPosts(resolvedUrl, type, currentPage)

  if (!term?.id) return { notFound: true }

  return { props: { term, currentPage } }
}
