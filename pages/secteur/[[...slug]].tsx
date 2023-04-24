import { getTermProps } from '@utils/getTermProps'
import TermLayout from '@layout/termLayout'
import { TermType, TermTypePlural } from '@utils/interfaces'
import { generateTermsStaticPaths } from '@utils/generateTermsStaticPaths'
import { initializeApollo } from '@graphql/client'
const client = initializeApollo()

export const getStaticProps = async ({ params }) => {
  const data = await getTermProps(params, TermType.Secteur, client)
  return data
}

export const getStaticPaths = async () => {
  const paths = await generateTermsStaticPaths(TermTypePlural.secteurs, client)
  return paths
}

const Secteur = (props) => <TermLayout {...props} />

export default Secteur
