import { performSearch } from '@graphql/api'
import getPagination from '@utils/getPagination'
import addLayoutData from '@utils/addLayoutData'

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
  const uri = `/search/_page_?s=${query.s}&category=${query.category}&secteur=${query.secteur}&region=${query.region}`
  const layout = await addLayoutData({
    posts,
    pages,
    currentPage,
    uri,
    search: query.s,
    isSearch: true,
  })
  return layout
}
