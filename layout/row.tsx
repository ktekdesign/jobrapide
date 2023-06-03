import StringComponent from '@components/loaders/string-component'
import { memo } from 'react'

const Row = ({ children, ...props }) => (
  <StringComponent as="div" className="row" {...props}>
    {children}
  </StringComponent>
)

export default memo(Row)
