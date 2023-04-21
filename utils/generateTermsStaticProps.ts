import { getLast } from './manipulateArray'

export const generateTermsStaticProps = (params) => {
  const currentPage = parseInt(getLast(params.slug)) || 1
  const page = params.slug.findIndex((slug) => slug === 'page')
  if (page !== -1) params.slug.splice(page, 2)
  const resolvedUrl = params.slug.reduce((acc, cur) => `${acc}/${cur}`)
  return { currentPage, resolvedUrl }
}
