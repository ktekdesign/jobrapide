import { getTermProps } from '@utils/getTermProps'
import TermLayout from '@layout/termLayout'
import { TermType, TermTypePlural } from '@utils/interfaces'
import { generateTermsStaticPaths } from '@utils/generateTermsStaticPaths'
import { generateTermsStaticProps } from '@utils/generateTermsStaticProps'

export const getStaticProps = async ({ params }) => {
  const { currentPage, resolvedUrl } = generateTermsStaticProps(params)
  const data = await getTermProps(
    `/secteur/${resolvedUrl}/`,
    params,
    TermType.Secteur,
    currentPage
  )
  return data
}

export const getStaticPaths = async () => {
  const paths = await generateTermsStaticPaths({
    type: TermTypePlural.secteurs,
  })
  return paths
}

const Secteur = ({ term, currentPage }) => (
  <TermLayout term={term} currentPage={currentPage} />
)

export default Secteur
