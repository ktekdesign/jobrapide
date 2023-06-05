import React, { memo } from 'react'
import SeoLink from '@components/seoLink'
import { FOOTER_MENU_ITEMS } from '@utils/constants'
import MappedComponent from '@components/loaders/mapped-component'
import ParsedComponent from '@components/parsed-component'

const FooterMenu = ({ items = FOOTER_MENU_ITEMS }) => (
  <nav className="navbar-footer">
    <MappedComponent as="ul" className="footer-menu-items" items={items}>
      <SeoLink as="li">
        <ParsedComponent />
      </SeoLink>
    </MappedComponent>
  </nav>
)

export default memo(FooterMenu)
