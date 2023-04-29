import { getTermProps } from '@utils/getTermProps'
import TermLayout from '@layout/termLayout'
import { TermType } from '@utils/interfaces/data'

export const getStaticProps = async ({ params }) => {
  const { id } = params
  const data = await getTermProps('offres', TermType.Category, Number(id))
  return data
}

export const getStaticPaths = () => {
  const paths = [
    { params: { id: '2' } },
    { params: { id: '3' } },
    { params: { id: '4' } },
    { params: { id: '5' } },
  ]
  return {
    paths,
    fallback: true,
  }
}

const Term = (props) => <TermLayout {...props} />

export default Term
