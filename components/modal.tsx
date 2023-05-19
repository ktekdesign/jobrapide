import { Dispatch, ReactNode, SetStateAction, memo, useCallback } from 'react'

import CloseIcon from '/public/images/close.svg'
import Button from '@components/form/Button'

const Modal = ({
  open,
  setOpen,
  children,
}: {
  open?: boolean
  setOpen?: Dispatch<SetStateAction<boolean>>
  children: ReactNode
}) => {
  const closeModal = useCallback(() => setOpen(false), [setOpen])

  return (
    <dialog onClick={closeModal} id="modal" open={open}>
      <div onClick={(e) => e.stopPropagation()} className="modal-inner">
        {children}
        <Button
          type="button"
          label="Close"
          className="closeButton"
          onClick={closeModal}
        >
          <CloseIcon className="icon" />
        </Button>
      </div>
    </dialog>
  )
}

export default memo(Modal)
