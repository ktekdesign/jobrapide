import { getTermProps } from '@utils/getTermProps'
import TermLayout from '@layout/termLayout'

export const getServerSideProps = async ({ resolvedUrl, params, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=3659'
  )
  const data = await getTermProps(resolvedUrl, params, 'region')
  return data
}

const Region = ({ term, current }) => (
  <TermLayout term={term} current={current} />
)

export default Region
