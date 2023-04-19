import { getTermAndPosts } from '@graphql/api'
import { TermType } from './interfaces'

export const getTermProps = async (resolvedUrl, params, type: TermType) => {
  const currentPage = parseInt(params.slug.pop()) || 1
  const term = await getTermAndPosts({
    term: resolvedUrl,
    type,
    page: currentPage,
  })

  if (!term?.id) return { notFound: true }

  return { props: { term, currentPage } }
}
