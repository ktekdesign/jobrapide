import { getTermAndPosts } from '@lib/api'

export const getTermProps = async (resolvedUrl, params, type) => {
  const term = await getTermAndPosts(resolvedUrl, type)
  const current = parseInt(params.slug.pop()) || 1

  if (!term?.id) return { notFound: true }

  return { props: { term, current } }
}
