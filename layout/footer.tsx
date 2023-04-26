import React, { memo, useState } from 'react'

import RegionsList from '@components/regionsList'
import SecteursList from '@components/secteursList'
import Copyright from '@components/copyright'
import { FOOTER_MENU_ITEMS } from '@utils/constants'
import FooterMenu from '@components/footerMenu'
import FooterTab from '@components/footerTab'
import TermsList from '@components/termsList'

const Footer = () => {
  const [active, setActive] = useState(0)
  return (
    <footer>
      <FooterTab {...{ active, setActive }} />
      <div className={active ? 'flex container' : 'hidden'}>
        {active === 1 && (
          <SecteursList>
            <TermsList />
          </SecteursList>
        )}
        {active === 2 && (
          <RegionsList>
            <TermsList />
          </RegionsList>
        )}
      </div>
      <FooterMenu items={FOOTER_MENU_ITEMS} />
      <Copyright />
    </footer>
  )
}

export default memo(Footer)
