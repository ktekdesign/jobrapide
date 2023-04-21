import { getTermProps } from '@utils/getTermProps'
import TermLayout from '@layout/termLayout'
import { TermType, TermTypePlural } from '@utils/interfaces'
import { generateTermsStaticProps } from '@utils/generateTermsStaticProps'
import { generateTermsStaticPaths } from '@utils/generateTermsStaticPaths'

export const getStaticProps = async ({ params }) => {
  const { currentPage, resolvedUrl } = generateTermsStaticProps(params)
  const data = await getTermProps(
    `/${TermType.Region.toLowerCase()}/${resolvedUrl}/`,
    params,
    TermType.Region,
    currentPage
  )
  return data
}

export const getStaticPaths = async () => {
  const paths = await generateTermsStaticPaths({ type: TermTypePlural.regions })
  return paths
}

const Region = ({ term, currentPage }) => (
  <TermLayout term={term} currentPage={currentPage} />
)

export default Region
