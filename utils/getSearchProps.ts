import { performSearch } from '@graphql/api'
import getPagination from './getPagination'

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
  const pages = getPagination(count, currentPage)
  return { posts, pages, currentPage }
}
