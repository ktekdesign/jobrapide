import { createContext, Dispatch } from 'react'
import { InitialModalStateType } from '@utils/interfaces'
import { initialModalState } from '@context/dataReducer'

export const ModalContext = createContext<{
  stateModal: InitialModalStateType
  dispatchModal: Dispatch<{ type: string } | null>
}>({
  stateModal: initialModalState,
  dispatchModal: () => null,
})

export default ModalContext
