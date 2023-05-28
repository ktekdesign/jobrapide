import { useRouter } from 'next/router'
import LogoMenu from '@components/logo-menu'
import { memo } from 'react'
import MainMenu from '@components/main-menu'

const Menu = ({ children, toggle, ...props }) => {
  const router = useRouter()

  return (
    <>
      <LogoMenu path={router.asPath} {...props} />
      <div data-toggle={toggle} className="main-menu">
        <MainMenu path={router.asPath} {...props} />
        {children}
      </div>
    </>
  )
}

export default memo(Menu)
