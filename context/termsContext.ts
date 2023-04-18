import { createContext, Dispatch } from 'react'
import { InitialStateType, Term } from '@utils/interfaces'
import { initialState } from '@context/dataReducer'

export const TermsContext = createContext<{
  stateTerms: InitialStateType
  dispatchTerms: Dispatch<{
    type: string
    payload: [Term | Term[], string]
  } | null>
}>({
  stateTerms: initialState,
  dispatchTerms: () => null,
})

export default TermsContext
