import React, { memo, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span>JobRapide</span>
          </span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="menu-mobile" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
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
          <li className="reveal">
            <Link
              href="https://www.jobrapide.org/admin/"
              title="Login / Créer un compte"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </Link>
          </li>
          <li className="lg:hidden reveal">
            <Link href="#" title="Télecharger notre application Android">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default memo(NavBar)
