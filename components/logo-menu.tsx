import SeoLink from './seoLink'
import Image from 'next/image'
import { memo } from 'react'

const LogoMenu = ({ router, ...props }) => (
  <div className="logo">
    <SeoLink label="JobRapide" href="/">
      <Image src="/images/logo.webp" width={40} height={40} alt="Logo" />
    </SeoLink>
    <SeoLink
      label="JobRapide"
      href="/"
      active={2}
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
