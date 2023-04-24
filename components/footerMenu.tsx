import React, { memo } from 'react'
import SeoLink from '@components/seoLink'

const FooterMenu = ({ items }) => (
  <nav className="navbar-footer">
    <div className="footer-menu">
      <ul className="footer-menu-items">
        {items?.map(({ uri, title }, i) => (
          <li key={i}>
            <SeoLink href={uri} label={title}>
              {title}
            </SeoLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>
)

export default memo(FooterMenu)
