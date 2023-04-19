import React, { memo, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import GooglePlay from '/public/images/googleplay.svg'
import MenuIcon from '/public/images/menu.svg'
import HomeIcon from '/public/images/home.svg'
import CloseIcon from '/public/images/close.svg'
import UserIcon from '/public/images/user.svg'
import SearchIcon from '/public/images/search.svg'

import useModal from '@hooks/useModal'

import { actions } from '@context/dataReducer'

const NavBar = ({ items }) => {
  const { dispatchModal } = useModal()
  const [showMenu, setShowMenu] = useState(false)
  const [currentPath, setCurrentPath] = useState('')
  const router = useRouter()

  useEffect(() => {
    setCurrentPath(router.asPath)
    setShowMenu(false)
  }, [router])

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <Image
            src="https://www.jobrapide.org/wp-content/uploads/2022/12/cropped-Job-6-270x270.png"
            width={40}
            height={40}
            alt="Logo"
          />
          <span className={currentPath === '/' ? 'home-active' : 'home'}>
            <HomeIcon className="icon" />
            <span>JobRapide</span>
          </span>
        </Link>
      </div>
      <div className="menu-mobile">
        <button onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? (
            <CloseIcon className="icon" />
          ) : (
            <MenuIcon className="icon" />
          )}
        </button>
      </div>
      <div className={`${showMenu ? 'flex' : 'hidden'} main-menu`}>
        <ul className="menu-items">
          {items?.map((item, i) => (
            <li key={i}>
              <Link
                href={item.uri}
                className={`menu-item-link ${
                  currentPath.startsWith(item.uri) ? 'menu-active' : ''
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="icons-menu">
          <li className="reveal download">
            <Link
              href="https://play.google.com/store/apps/details?id=com.ktekdesign.app.tchadcarriere"
              title="Télecharger notre application Android"
              target="_blank"
            >
              <GooglePlay />
            </Link>
          </li>
          <li className="reveal">
            <Link
              href="https://www.jobrapide.org/admin/"
              title="Login / Créer un compte"
            >
              <UserIcon className="icon" />
            </Link>
          </li>
          <li className="reveal">
            <Link
              href="#modal"
              onClick={(e) => {
                e.preventDefault()
                dispatchModal({ type: actions.SET_TOGGLE_MODAL })
              }}
              title="Faire une recherche"
            >
              <SearchIcon className="icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default memo(NavBar)
