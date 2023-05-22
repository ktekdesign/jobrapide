import UserIcon from '/public/images/user.svg'
import PublishIcon from '/public/images/publish.svg'
import { ADMIN_URL, APP_URL } from '@utils/constants'
import SeoLink from './seoLink'
import Image from 'next/image'
import { memo } from 'react'

const IconMenu = ({ children }) => (
  <ul className="icons-menu">
    <SeoLink
      as="li"
      className="download"
      label="Télecharger notre application Android"
      href={APP_URL}
      target="_blank"
    >
      <Image
        src="/images/googleplay.webp"
        width={170}
        height={64}
        alt="download app"
      />
    </SeoLink>
    <SeoLink
      className="reveal"
      as="li"
      href={ADMIN_URL}
      label="Login / Créer un compte"
    >
      <UserIcon className="icon" />
    </SeoLink>
    <SeoLink
      className="reveal"
      as="li"
      href={ADMIN_URL}
      label="Publier une offre / Publier un CV"
    >
      <PublishIcon className="icon" />
    </SeoLink>
    {children}
  </ul>
)

export default memo(IconMenu)
