import { createPortal } from 'react-dom'
import { ReactNode, memo } from 'react'

const Portal = ({ children, id }: { children: ReactNode; id?: Element }) => (
  <>{createPortal(<>{children}</>, id)}</>
)

export default memo(Portal)
