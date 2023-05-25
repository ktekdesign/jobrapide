import SeoLink from './seoLink'
import { memo } from 'react'
import Logo from './logo'

const LogoMenu = ({ router, ...props }) => (
  <div className="logo">
    <SeoLink title="JobRapide" href="/">
      <Logo width={40} height={40} />
    </SeoLink>
    <SeoLink
      title="JobRapide"
      href="/"
      data-toggle="true"
      data-active={router === '/'}
      className="home"
      {...props}
    >
      {process.env.NEXT_PUBLIC_CMS_NAME}
    </SeoLink>
  </div>
)

export default memo(LogoMenu)
