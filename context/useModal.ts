import { useContext } from 'react'
import ModalContext from './modalContext'

const useModal = () => {
  const context = useContext(ModalContext)

  if (context === undefined) {
    throw new Error('useModal must be used within ModalContext')
  }

  return context
}

export default useModal
