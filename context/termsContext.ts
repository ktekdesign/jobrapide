import { createContext, Dispatch } from 'react'
import {
  InitialStateType,
  Term,
  TermType,
  TermTypePlural,
} from '@utils/interfaces'
import { initialState } from '@context/dataReducer'

export const TermsContext = createContext<{
  stateTerms: InitialStateType
  dispatchTerms: Dispatch<{
    type: string
    payload: [Term | Term[], TermType | TermTypePlural | string]
  } | null>
}>({
  stateTerms: initialState,
  dispatchTerms: () => null,
})

export default TermsContext
