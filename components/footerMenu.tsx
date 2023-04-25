import React, { memo } from 'react'
import SeoLink from '@components/seoLink'

const FooterMenu = ({ items }) => (
  <nav className="navbar-footer">
    <div className="footer-menu">
      <ul className="footer-menu-items">
        {items?.map(({ uri, title }, i) => (
          <SeoLink key={i} as="li" href={uri} label={title}>
            {title}
          </SeoLink>
        ))}
      </ul>
    </div>
  </nav>
)

export default memo(FooterMenu)
