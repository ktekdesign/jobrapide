import { getTermProps } from '@utils/getTermProps'
import TermLayout from '@layout/termLayout'
import { TermType, TermTypePlural } from '@utils/interfaces'
import { generateTermsStaticProps } from '@utils/generateTermsStaticProps'
import { generateTermsStaticPaths } from '@utils/generateTermsStaticPaths'

export const getStaticProps = async ({ params }) => {
  const { currentPage, resolvedSlug } = generateTermsStaticProps(params)

  const data = await getTermProps(resolvedSlug, TermType.Category, currentPage)
  return data
}

export const getStaticPaths = async () => {
  const paths = await generateTermsStaticPaths({
    type: TermTypePlural.categories,
  })
  return paths
}
const Category = ({ term, currentPage }) => (
  <TermLayout term={term} currentPage={currentPage} />
)

export default Category
