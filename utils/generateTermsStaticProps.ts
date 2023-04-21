import { getLast, prev } from './manipulateArray'

export const generateTermsStaticProps = (params) => {
  const pageIndex = params?.slug?.findIndex((param) => param === 'page')
  const resolvedSlug =
    pageIndex && pageIndex !== -1
      ? params.slug[prev(pageIndex)]
      : getLast(params.slug)
  const currentPage =
    pageIndex && pageIndex !== -1 ? parseInt(getLast(params.slug)) : 1

  return { currentPage, resolvedSlug }
}
