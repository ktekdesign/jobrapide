import { getTermProps } from '@utils/getTermProps'
import TermLayout from '@layout/termLayout'
import { TermType, TermTypePlural } from '@utils/interfaces/data'
import { generateTermsStaticPaths } from '@utils/generateTermsStaticPaths'

export const getStaticProps = async ({ params }) => {
  const { slug, id } = params
  const data = await getTermProps(slug, TermType.Secteur, Number(id))
  return data
}

export const getStaticPaths = () =>
  generateTermsStaticPaths(TermTypePlural.secteurs)

const Term = (props) => <TermLayout {...props} />

export default Term
