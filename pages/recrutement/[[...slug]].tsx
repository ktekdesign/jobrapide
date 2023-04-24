import { getTermProps } from '@utils/getTermProps'
import TermLayout from '@layout/termLayout'
import { TermType, TermTypePlural } from '@utils/interfaces'
import { generateTermsStaticPaths } from '@utils/generateTermsStaticPaths'
import client from '@graphql/client'

export const getStaticProps = async ({ params }) => {
  const data = await getTermProps(params, TermType.Category, client)
  return data
}

export const getStaticPaths = async () => {
  const paths = await generateTermsStaticPaths(
    TermTypePlural.categories,
    client
  )
  return paths
}
const Category = (props) => <TermLayout {...props} />

export default Category
