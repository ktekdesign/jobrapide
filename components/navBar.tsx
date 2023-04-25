import React, { memo, useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import MenuIcon from '/public/images/menu.svg'
import HomeIcon from '/public/images/home.svg'
import CloseIcon from '/public/images/close.svg'
import UserIcon from '/public/images/user.svg'
import SearchIcon from '/public/images/search.svg'
import Button from '@components/form/Button'
import SeoLink from '@components/seoLink'

const NavBar = ({ items, setOpen }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [currentPath, setCurrentPath] = useState('')
  const router = useRouter()

  useEffect(() => {
    setCurrentPath(router.asPath)
    setShowMenu(false)
  }, [router])

  return (
    <nav className="navbar">
      <SeoLink href="/" label="JobRapide" as="div" className="logo">
        <Image src="/images/logo.png" width={40} height={40} alt="Logo" />
        <span className={currentPath === '/' ? 'home-active' : 'home'}>
          <HomeIcon className="icon" />
          <span>{process.env.NEXT_PUBLIC_CMS_NAME}</span>
        </span>
      </SeoLink>
      <Button
        className="menu-mobile"
        label="Menu principal"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? (
          <CloseIcon className="icon" />
        ) : (
          <MenuIcon className="icon" />
        )}
      </Button>
      <div className={`${showMenu ? 'flex' : 'hidden'} main-menu lg:flex`}>
        <ul className="menu-items">
          {items?.map(({ uri, title }, i) => (
            <SeoLink
              as="li"
              key={i}
              href={uri}
              label={title}
              className={`menu-item-link ${
                currentPath.startsWith(uri) ? 'menu-active' : ''
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
            href="https://play.google.com/store/apps/details?id=com.ktekdesign.app.tchadcarriere"
            target="_blank"
          >
            <Image
              src="/images/googleplay.png"
              width={170}
              height={64}
              alt="download app"
            />
          </SeoLink>
          <SeoLink
            className="reveal"
            as="li"
            href="https://www.jobrapide.org/admin/"
            label="Login / Créer un compte"
          >
            <UserIcon className="icon" />
          </SeoLink>
          <li className="reveal">
            <Button
              onClick={(e) => {
                e.preventDefault()
                setOpen(true)
              }}
              label="Faire une recherche"
            >
              <SearchIcon className="icon" />
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default memo(NavBar)
