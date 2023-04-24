import React, { memo } from 'react'

const FooterTab = ({ active, setActive }) => (
  <ul
    className={`tab ${
      active === 1 ? 'flex-col-reverse lg:flex-row' : 'flex-col lg:flex-row'
    }`}
  >
    <li
      className={active === 1 ? 'active' : 'secteur-tab'}
      onClick={() => setActive(1)}
    >
      <span>Emplois par secteur / Jobs by sector</span>
    </li>
    <li
      className={active === 2 ? 'active' : 'region-tab'}
      onClick={() => setActive(2)}
    >
      <span>Emplois par région / Jobs by region</span>
    </li>
  </ul>
)

export default memo(FooterTab)
