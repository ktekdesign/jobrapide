import React, { memo, useCallback, useState, useTransition } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import MenuIcon from '/public/images/menu.svg'
import CloseIcon from '/public/images/close.svg'
import UserIcon from '/public/images/user.svg'
import SearchIcon from '/public/images/search.svg'
import PublishIcon from '/public/images/publish.svg'
import Button from '@components/form/Button'
import SeoLink from '@components/seoLink'
import { ADMIN_URL, APP_URL } from '@utils/constants'

const NavBar = ({ items, setOpen }) => {
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const closeMenu = useCallback(
    () =>
      startTransition(() => {
        setShowMenu(false)
      }),
    []
  )
  const toggleMenu = useCallback(
    () =>
      startTransition(() => {
        setShowMenu(!showMenu)
      }),
    [showMenu]
  )
  const openModal = useCallback(
    () =>
      startTransition(() => {
        setOpen(true)
      }),
    [setOpen]
  )

  return (
    <nav className={`navbar ${isPending ? 'bg-slate-500' : ''}`}>
      <SeoLink
        onClick={closeMenu}
        href="/"
        label="JobRapide"
        as="div"
        className="logo"
      >
        <Image src="/images/logo.webp" width={40} height={40} alt="Logo" />
        <span className={router.asPath === '/' ? 'home-active' : 'home'}>
          {process.env.NEXT_PUBLIC_CMS_NAME}
        </span>
      </SeoLink>
      <Button
        className="menu-mobile"
        label="Menu principal"
        onClick={toggleMenu}
      >
        <CloseIcon className={`icon${!showMenu ? ' hidden' : ''}`} />
        <MenuIcon className={`icon${showMenu ? ' hidden' : ''}`} />
      </Button>
      <div className={`${(showMenu && 'flex') || 'hidden'} main-menu lg:flex`}>
        <ul className="menu-items">
          {items?.map(({ uri, title }, key) => (
            <SeoLink
              as="li"
              key={key}
              href={uri}
              label={title}
              onClick={closeMenu}
              className={`menu-item-link${
                (router.asPath === uri && ' menu-active') || ''
              }`}
            >
              {title}
            </SeoLink>
          ))}
        </ul>
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
          <li className="reveal">
            <Button onClick={openModal} label="Faire une recherche">
              <SearchIcon className="icon" />
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default memo(NavBar)
