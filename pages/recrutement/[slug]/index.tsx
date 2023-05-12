import { getTermProps } from '@utils/getTermProps'
import TermLayout from '@layout/termLayout'
import { TermType } from '@utils/interfaces/data'
import { generateOthersCategoriesStaticPaths } from '@utils/generateOthersCategoriesStaticPaths'

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const data = await getTermProps(slug, TermType.Category)
  return data
}

export const getStaticPaths = () => generateOthersCategoriesStaticPaths(false)

const Term = (props) => <TermLayout {...props} />

export default Term
