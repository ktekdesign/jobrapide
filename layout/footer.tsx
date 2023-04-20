import React, { memo, useState } from 'react'

import RegionsList from '@components/regionsList'
import SecteursList from '@components/secteursList'
import Container from '@layout/container'
import Copyright from '@components/copyright'
import { FOOTER_MENU_ITEMS } from '@utils/constants'
import FooterMenu from '@components/footerMenu'
import FooterTab from '@components/footerTab'

const Footer = () => {
  const [active, setActive] = useState(1)
  return (
    <footer>
      <FooterTab {...{ active, setActive }} />
      <Container>
        <SecteursList {...{ active }} />
        <RegionsList {...{ active }} />
      </Container>
      <FooterMenu items={FOOTER_MENU_ITEMS} />
      <Copyright />
    </footer>
  )
}

export default memo(Footer)
