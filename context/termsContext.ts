import { createContext, Dispatch } from 'react'
import { InitialStateType, TermProps, TermsListProps } from '../interfaces'
import { initialState } from './dataReducer'

export const TermsContext = createContext<{
  state: InitialStateType
  dispatch: Dispatch<{
    type: string
    payload: [TermProps | TermsListProps, string]
  } | null>
}>({
  state: initialState,
  dispatch: () => null,
})

export default TermsContext
