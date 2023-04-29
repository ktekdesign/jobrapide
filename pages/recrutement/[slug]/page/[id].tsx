import { getTermProps } from '@utils/getTermProps'
import TermLayout from '@layout/termLayout'
import { TermType } from '@utils/interfaces/data'
import { generateOthersCategoriesStaticPaths } from '@utils/generateOthersCategoriesStaticPaths'

export const getStaticProps = async ({ params }) => {
  const { slug, id } = params
  const data = await getTermProps(slug, TermType.Category, Number(id))
  return data
}

export const getStaticPaths = async () => {
  const paths = await generateOthersCategoriesStaticPaths()
  return paths
}

const Term = (props) => <TermLayout {...props} />

export default Term
