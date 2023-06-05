import LogoMenu from '@components/logo-menu'
import { memo } from 'react'
import MappedComponent from '@components/loaders/mapped-component'
import SeoLink from '@components/seoLink'
import { MENU_ITEMS } from '@utils/constants'

const Menu = ({ children, toggle, items = MENU_ITEMS, ...props }) => (
  <>
    <LogoMenu {...props} />
    <div data-toggle={toggle} className="main-menu">
      <MappedComponent as="ul" className="menu-items" items={items}>
        <SeoLink as="li" className="menu-item-link" {...props} />
      </MappedComponent>
      {children}
    </div>
  </>
)

export default memo(Menu)
