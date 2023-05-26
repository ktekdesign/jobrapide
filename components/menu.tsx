import { useRouter } from 'next/router'
import LogoMenu from '@components/logo-menu'
import { memo } from 'react'
import MainMenu from '@components/main-menu'

const Menu = ({ children, toggle, ...props }) => {
  const { asPath: router } = useRouter()
  return (
    <>
      <LogoMenu {...props} router={router} />
      <div data-toggle={toggle} className="main-menu">
        <MainMenu {...props} router={router} />
        {children}
      </div>
    </>
  )
}

export default memo(Menu)
