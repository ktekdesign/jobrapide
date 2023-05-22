import { memo } from 'react'
import SeoLink from './seoLink'
import { MENU_ITEMS } from '@utils/constants'

const MainMenu = ({ items = MENU_ITEMS, router, ...props }) => (
  <ul className="menu-items">
    {items?.map(({ uri, title }, key) => (
      <SeoLink
        as="li"
        key={key}
        href={uri}
        label={title}
        data-active={router.startsWith(uri)}
        className="menu-item-link"
        {...props}
      >
        {title}
      </SeoLink>
    ))}
  </ul>
)

export default memo(MainMenu)
