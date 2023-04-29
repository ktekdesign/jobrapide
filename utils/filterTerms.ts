import { mapTerm } from './mapping'

export const filterTerms = (data) => {
  const termsData = data ? Object.values(data).map(({ nodes }) => nodes) : null
  const terms = []
  termsData?.map((termData) =>
    termData.map((term) => terms.push(mapTerm(term)))
  )
  return terms
}
