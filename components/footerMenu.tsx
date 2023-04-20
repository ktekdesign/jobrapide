import React, { memo } from 'react'
import Link from 'next/link'

const FooterMenu = ({ items }) => (
  <nav className="navbar-footer">
    <div className="footer-menu">
      <ul className="footer-menu-items">
        {items?.map(({ uri, title }, i) => (
          <li key={i}>
            <Link href={uri}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
)

export default memo(FooterMenu)
