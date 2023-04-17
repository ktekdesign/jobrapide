import { createContext, Dispatch } from 'react'
import { InitialStateType, TermProps, TermsListProps } from '@utils/interfaces'
import { initialState } from '@context/dataReducer'

export const TermsContext = createContext<{
  stateTerms: InitialStateType
  dispatchTerms: Dispatch<{
    type: string
    payload: [TermProps | TermsListProps, string]
  } | null>
}>({
  stateTerms: initialState,
  dispatchTerms: () => null,
})

export default TermsContext
