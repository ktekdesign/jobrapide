import LogoMenu from '@components/logo-menu'
import { memo } from 'react'
import MainMenu from '@components/main-menu'

const Menu = ({ children, toggle, ...props }) => (
  <>
    <LogoMenu {...props} />
    <div data-toggle={toggle} className="main-menu">
      <MainMenu {...props} />
      {children}
    </div>
  </>
)

export default memo(Menu)
