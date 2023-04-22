import { getTermProps } from '@utils/getTermProps'
import TermLayout from '@layout/termLayout'
import { TermType, TermTypePlural } from '@utils/interfaces'
import { generateTermsStaticPaths } from '@utils/generateTermsStaticPaths'

export const getStaticProps = async ({ params }) => {
  const data = await getTermProps(params, TermType.Region)
  return data
}

export const getStaticPaths = async () => {
  const paths = await generateTermsStaticPaths({ type: TermTypePlural.regions })
  return paths
}

const Region = (props) => <TermLayout {...props} />

export default Region
