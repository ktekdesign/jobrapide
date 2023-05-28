import { memo } from 'react'

import CloseIcon from '/public/images/close.svg'
import Button from '@components/form/Button'

const Modal = ({ children, ...props }) => (
  <dialog id="modal" open={true} {...props}>
    <div onClick={(e) => e.stopPropagation()} className="modal-inner">
      {children}
      <Button type="button" label="Close" className="closeButton" {...props}>
        <CloseIcon className="icon" />
      </Button>
    </div>
  </dialog>
)

export default memo(Modal)
