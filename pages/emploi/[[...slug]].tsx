import { getTermProps } from '@utils/getTermProps'
import TermLayout from '@layout/termLayout'
import { TermType, TermTypePlural } from '@utils/interfaces'
import { generateTermsStaticPaths } from '@utils/generateTermsStaticPaths'

export const getStaticProps = async ({ params }) => {
  const data = await getTermProps(params, TermType.Tag)
  return data
}

export const getStaticPaths = async () => {
  const paths = await generateTermsStaticPaths({
    type: TermTypePlural.tags,
  })
  return paths
}
const Tag = (props) => <TermLayout {...props} />

export default Tag
