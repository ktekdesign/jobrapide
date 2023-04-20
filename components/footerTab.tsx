import React, { memo } from 'react'

const FooterTab = ({ active, setActive }) => (
  <ul className="tab">
    <li className={active === 1 ? 'active' : ''} onClick={() => setActive(1)}>
      <span>Emplois par secteur / Jobs by sector</span>
    </li>
    <li className={active === 2 ? 'active' : ''} onClick={() => setActive(2)}>
      <span>Emplois par région / Jobs by region</span>
    </li>
  </ul>
)

export default memo(FooterTab)
