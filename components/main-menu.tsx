import { memo } from 'react'
import { MENU_ITEMS } from '@utils/constants'
import MenuLink from '@components/menu-link'
import MappedComponent from '@components/loaders/mapped-component'

const MainMenu = ({ items = MENU_ITEMS, path, ...props }) => (
  <MappedComponent as="ul" className="menu-items" items={items}>
    <MenuLink path={path} {...props} />
  </MappedComponent>
)

export default memo(MainMenu)
