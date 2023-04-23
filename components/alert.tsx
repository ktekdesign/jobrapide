import { memo } from 'react'

const Alert = ({ show, message }) => {
  return <div className={`alert ${show}`}>{message}</div>
}

export default memo(Alert)
