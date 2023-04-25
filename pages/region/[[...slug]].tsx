import { getTermProps } from '@utils/getTermProps'
import TermLayout from '@layout/termLayout'
import { TermType, TermTypePlural } from '@utils/interfaces/data'
import { generateTermsStaticPaths } from '@utils/generateTermsStaticPaths'
import client from '@graphql/client'

export const getStaticProps = async ({ params }) => {
  const data = await getTermProps(params, TermType.Region, client)
  return data
}

export const getStaticPaths = async () => {
  const paths = await generateTermsStaticPaths(TermTypePlural.regions, client)
  return paths
}

const Region = (props) => <TermLayout {...props} />

export default Region
