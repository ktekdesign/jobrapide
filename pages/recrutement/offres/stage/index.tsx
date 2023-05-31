import { getTermProps } from '@utils/getTermProps'
import TermLayout from '@layout/termLayout'
import { TermType } from '@utils/interfaces/data'
import { memo } from 'react'

export const getStaticProps = async () => {
  const data = await getTermProps('stage', TermType.Category)
  return data
}

const Term = (props) => <TermLayout {...props} />

export default memo(Term)
