import MenuIcon from '/public/images/menu.svg'
import CloseIcon from '/public/images/close.svg'
import Button from '@components/form/Button'
import { memo } from 'react'
import OnboardingFlow from '@components/loaders/onboardingFlow'

const MobileMenuClose = ({ toggle, ...props }) => (
  <Button className="menu-mobile" label="Menu principal" {...props}>
    <OnboardingFlow active={toggle}>
      <MenuIcon className="icon" />
      <CloseIcon className="icon" />
    </OnboardingFlow>
  </Button>
)

export default memo(MobileMenuClose)
