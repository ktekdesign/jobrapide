import { getTermProps } from '@utils/getTermProps'
import TermLayout from '@layout/termLayout'
import { TermType } from '@utils/interfaces/data'

export const getStaticProps = async () => {
  const data = await getTermProps('offres', TermType.Category)
  return data
}

const Term = (props) => <TermLayout {...props} />

export default Term
