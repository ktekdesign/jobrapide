import { memo } from 'react'
import SeoLink from './seoLink'
import { MENU_ITEMS } from '@utils/constants'

const MainMenu = ({ items = MENU_ITEMS, router, ...props }) => (
  <ul className="menu-items">
    {items?.map(({ href, title }, key) => (
      <SeoLink
        as="li"
        key={key}
        data-active={router.startsWith(href)}
        className="menu-item-link"
        {...{ href, title, ...props }}
      >
        {title}
      </SeoLink>
    ))}
  </ul>
)

export default memo(MainMenu)
