import { getTermProps } from '@utils/getTermProps'
import TermLayout from '@layout/termLayout'
import { TermType, TermTypePlural } from '@utils/interfaces'
import { generateTermsStaticPaths } from '@utils/generateTermsStaticPaths'
import { generateTermsStaticProps } from '@utils/generateTermsStaticProps'

export const getStaticProps = async ({ params }) => {
  const { currentPage, resolvedSlug } = generateTermsStaticProps(params)
  const data = await getTermProps(resolvedSlug, TermType.Secteur, currentPage)
  return data
}

export const getStaticPaths = async () => {
  const paths = await generateTermsStaticPaths({
    type: TermTypePlural.secteurs,
  })
  return paths
}

const Secteur = (props) => <TermLayout {...props} />

export default Secteur
