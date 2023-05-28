import { getTermProps } from '@utils/getTermProps'
import TermLayout from '@layout/termLayout'
import { TermType, TermTypePlural } from '@utils/interfaces/data'
import { generateTermsStaticPaths } from '@utils/generateTermsStaticPaths'
import { memo } from 'react'

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const data = await getTermProps(slug, TermType.Category)
  return data
}

export const getStaticPaths = async () =>
  generateTermsStaticPaths(TermTypePlural.categories, false)

const Term = (props) => <TermLayout {...props} />

export default memo(Term)
