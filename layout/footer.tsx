import React, { memo, useState } from 'react'

import Copyright from '@components/copyright'
import { FOOTER_MENU_ITEMS } from '@utils/constants'
import FooterMenu from '@components/footerMenu'
import FooterTab from '@components/footerTab'
import TermsList from '@components/termsList'
import OnboardingFlow from '@components/onboardingFlow'
import Loading from '@components/loading'
import { useTerms } from '@hooks/useTerms'

const Footer = () => {
  const [active, setActive] = useState(0)
  return (
    <footer>
      <FooterTab {...{ active, setActive }} />
      <OnboardingFlow active={active}>
        <></>
        <Loading {...useTerms('secteurs', active === 1)}>
          <TermsList className="secteurs-list" />
        </Loading>
        <Loading {...useTerms('regions', active === 2)}>
          <TermsList className="regions-list" />
        </Loading>
      </OnboardingFlow>
      <FooterMenu items={FOOTER_MENU_ITEMS} />
      <Copyright />
    </footer>
  )
}

export default memo(Footer)
