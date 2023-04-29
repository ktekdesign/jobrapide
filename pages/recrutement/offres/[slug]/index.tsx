import { getTermProps } from '@utils/getTermProps'
import TermLayout from '@layout/termLayout'
import { TermType, TermTypePlural } from '@utils/interfaces/data'
import { generateTermsStaticPaths } from '@utils/generateTermsStaticPaths'

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const data = await getTermProps(slug, TermType.Category)
  return data
}

export const getStaticPaths = async () => {
  const paths = await generateTermsStaticPaths(TermTypePlural.categories, false)
  return paths
}

const Term = (props) => <TermLayout {...props} />

export default Term
