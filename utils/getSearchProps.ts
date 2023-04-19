import { performSearch } from '@lib/api'

export const getSearchProps = async (query, params) => {
  const { s, category, secteur, region } = query
  const currentPage = parseInt(params?.slug?.pop()) || 1
  const { posts, count } = await performSearch({
    search: s,
    category,
    secteur,
    region,
    page: currentPage,
    isSearch: true,
  })

  return { posts, count, currentPage }
}
