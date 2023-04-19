import React, { memo, useState } from 'react'

import RegionsList from '@components/regionsList'
import SecteursList from '@components/secteursList'
import Container from '@layout/container'
import Copyright from '@components/copyright'
import { CMS_NAME, FOOTER_MENU_ITEMS } from '@utils/constants'
import FooterMenu from '@components/footerMenu'

const Footer = () => {
  const [active, setActive] = useState(1)
  return (
    <footer>
      <ul className="tab">
        <li className={active === 1 ? 'active' : ''}>
          <span onClick={() => setActive(1)}>
            Emplois par secteur / Jobs by sector
          </span>
        </li>
        <li className={active === 2 ? 'active' : ''}>
          <span onClick={() => setActive(2)}>
            Emplois par région / Jobs by region
          </span>
        </li>
        <li className={active === 3 ? 'active' : ''}>
          <span onClick={() => setActive(3)}>{CMS_NAME} / Contact</span>
        </li>
      </ul>
      <Container>
        <SecteursList active={active} />
      </Container>
      <Container>
        <RegionsList active={active} />
      </Container>
      <FooterMenu items={FOOTER_MENU_ITEMS} />
      <Copyright />
    </footer>
  )
}

export default memo(Footer)
