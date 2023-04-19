import { getTermProps } from '@utils/getTermProps'
import TermLayout from '@layout/termLayout'
import { TermType } from '@utils/interfaces'

export const getServerSideProps = async ({ resolvedUrl, params, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=3659'
  )
  const data = await getTermProps(resolvedUrl, params, TermType.Tag)
  return data
}

const Tag = ({ term, currentPage }) => (
  <TermLayout term={term} currentPage={currentPage} />
)

export default Tag
