import { memo } from 'react'
import { MENU_ITEMS } from '@utils/constants'
import MappedComponent from '@components/loaders/mapped-component'
import SeoLink from './seoLink'

const MainMenu = ({ items = MENU_ITEMS, ...props }) => (
  <MappedComponent as="ul" className="menu-items" items={items}>
    <SeoLink as="li" className="menu-item-link" {...props} />
  </MappedComponent>
)

export default memo(MainMenu)
