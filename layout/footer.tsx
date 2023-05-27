import { memo } from 'react'

import Copyright from '@components/copyright'
import FooterMenu from '@components/footerMenu'
import FooterTabDetails from '@components/footer-tab-details'

const Footer = () => (
  <footer>
    <FooterTabDetails />
    <FooterMenu />
    <Copyright />
  </footer>
)

export default memo(Footer)
