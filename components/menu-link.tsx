import { memo } from 'react'
import SeoLink from '@components/seoLink'

const MenuLink = ({ path = '', href = '', title = '', ...props }) => (
  <SeoLink
    as="li"
    data-active={path === href}
    className="menu-item-link"
    {...{ href, title, ...props }}
  >
    {title}
  </SeoLink>
)

export default memo(MenuLink)
