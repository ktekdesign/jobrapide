import { createContext, Dispatch } from 'react'
import { InitialModalStateType } from '../interfaces'
import { initialModalState } from './dataReducer'

export const ModalContext = createContext<{
  state: InitialModalStateType
  dispatch: Dispatch<{ type: string } | null>
}>({
  state: initialModalState,
  dispatch: () => null,
})

export default ModalContext
