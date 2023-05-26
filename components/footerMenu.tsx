import React, { memo } from 'react'
import SeoLink from '@components/seoLink'
import { FOOTER_MENU_ITEMS } from '@utils/constants'
import MappedComponent from '@components/loaders/mapped-component'
import ParsedComponent from '@components/parsed-component'

const FooterMenu = ({ items = FOOTER_MENU_ITEMS }) => (
  <nav className="navbar-footer">
    <div className="footer-menu">
      <ul className="footer-menu-items">
        <MappedComponent items={items}>
          <SeoLink as="li">
            <ParsedComponent />
          </SeoLink>
        </MappedComponent>
      </ul>
    </div>
  </nav>
)

export default memo(FooterMenu)
