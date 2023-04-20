import { createContext, Dispatch, SetStateAction } from 'react'
import { Term } from '@utils/interfaces'

type TermsContextData = {
  categories: Term[]
  setCategories: Dispatch<SetStateAction<Term[]>>
  secteurs: Term[]
  setSecteurs: Dispatch<SetStateAction<Term[]>>
  regions: Term[]
  setRegions: Dispatch<SetStateAction<Term[]>>
  niveaux: Term[]
  setNiveaux: Dispatch<SetStateAction<Term[]>>
}
export const TermsContext = createContext({} as TermsContextData)

export default TermsContext
