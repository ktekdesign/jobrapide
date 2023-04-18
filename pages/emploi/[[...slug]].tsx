import { getTermProps } from '@utils/getTermProps'
import TermLayout from '@layout/termLayout'

export const getServerSideProps = async ({ resolvedUrl, params, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=3659'
  )
  const data = await getTermProps(resolvedUrl, params, 'tag')
  return data
}

const Tag = ({ term, currentPage }) => (
  <TermLayout term={term} currentPage={currentPage} />
)

export default Tag
