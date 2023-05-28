import { memo } from 'react'

const FooterTabItem = ({ order = 0, active = 0, title = '', ...props }) => (
  <li data-active={active === order} data-order={order} {...props}>
    {title}
  </li>
)

export default memo(FooterTabItem)
