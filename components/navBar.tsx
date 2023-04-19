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
          <li className="lg:hidden reveal download">
            <Link
              href="https://play.google.com/store/apps/details?id=com.ktekdesign.app.tchadcarriere"
              title="Télecharger notre application Android"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
                height="h-4"
                width="h-6"
                y="0"
                x="0"
                id="Layer_2"
                version="1.1"
                fill=""
                viewBox="-1220.61 -475.92425 10578.62 2855.5455"
              >
                <g transform="translate(0 -.008)" id="g1231">
                  <linearGradient
                    gradientTransform="matrix(11.64 0 0 -22.55 -32777 34043.164)"
                    y2="1449.456"
                    x2="2784.353"
                    y1="1504.53"
                    x1="2891.046"
                    gradientUnits="userSpaceOnUse"
                    id="SVGID_1_"
                  >
                    <stop id="stop1179" offset="0" stop-color="#00a0ff" />
                    <stop id="stop1181" offset=".007" stop-color="#00a1ff" />
                    <stop id="stop1183" offset=".26" stop-color="#00beff" />
                    <stop id="stop1185" offset=".512" stop-color="#00d2ff" />
                    <stop id="stop1187" offset=".76" stop-color="#00dfff" />
                    <stop id="stop1189" offset="1" stop-color="#00e3ff" />
                  </linearGradient>
                  <path
                    id="path1192"
                    d="M33.7 29.2C12.3 52.2 0 87.6 0 133.6v1636.2c0 46 12.3 81.4 34.5 103.6l5.8 4.9 916.8-916.8v-20.6L39.5 24.3l-5.8 4.9z"
                    fill="url(#SVGID_1_)"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                  <linearGradient
                    gradientTransform="matrix(9.145 0 0 -7.7 -25077.303 11907.105)"
                    y2="1422.774"
                    x2="2739.434"
                    y1="1422.774"
                    x1="2935.234"
                    gradientUnits="userSpaceOnUse"
                    id="SVGID_2_"
                  >
                    <stop id="stop1194" offset="0" stop-color="#ffe000" />
                    <stop id="stop1196" offset=".409" stop-color="#ffbd00" />
                    <stop id="stop1198" offset=".775" stop-color="orange" />
                    <stop id="stop1200" offset="1" stop-color="#ff9c00" />
                  </linearGradient>
                  <path
                    id="path1203"
                    d="M1262.1 1268.3L956.3 962.4V941l305.9-305.9 6.6 4.1 361.8 205.6c103.6 58.4 103.6 154.6 0 213.8l-361.8 205.6c-.1 0-6.7 4.1-6.7 4.1z"
                    fill="url(#SVGID_2_)"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                  <linearGradient
                    gradientTransform="matrix(15.02 0 0 -11.5775 -43191.684 17692.937)"
                    y2="1285.867"
                    x2="2836.642"
                    y1="1431.331"
                    x1="2948.769"
                    gradientUnits="userSpaceOnUse"
                    id="SVGID_3_"
                  >
                    <stop id="stop1205" offset="0" stop-color="#ff3a44" />
                    <stop id="stop1207" offset="1" stop-color="#c31162" />
                  </linearGradient>
                  <path
                    id="path1210"
                    d="M1268.7 1264.2L956.3 951.7 33.7 1874.3c33.7 36.2 90.4 40.3 153.8 4.9l1081.2-615"
                    fill="url(#SVGID_3_)"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                  <linearGradient
                    gradientTransform="matrix(15.02 0 0 -11.5715 -43191.684 17672.391)"
                    y2="1506.756"
                    x2="2912.461"
                    y1="1571.747"
                    x1="2862.393"
                    gradientUnits="userSpaceOnUse"
                    id="SVGID_4_"
                  >
                    <stop id="stop1212" offset="0" stop-color="#32a071" />
                    <stop id="stop1214" offset=".069" stop-color="#2da771" />
                    <stop id="stop1216" offset=".476" stop-color="#15cf74" />
                    <stop id="stop1218" offset=".801" stop-color="#06e775" />
                    <stop id="stop1220" offset="1" stop-color="#00f076" />
                  </linearGradient>
                  <path
                    id="path1223"
                    d="M1268.7 639.3L187.5 25.1C124.2-11.1 67.4-6.2 33.7 30l922.5 921.7z"
                    fill="url(#SVGID_4_)"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                  <path
                    id="path1225"
                    d="M1262.1 1257.6L188.3 1867.7c-60 34.5-113.5 32.1-148 .8l-5.8 5.8 5.8 4.9c34.5 31.2 88 33.7 148-.8l1081.2-614.2-7.4-6.6z"
                    opacity=".2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                  <path
                    id="path1227"
                    d="M1630.5 1047.9l-369.2 209.7 6.6 6.6 361.8-205.6c51.8-29.6 77.3-68.2 77.3-106.9-3.3 35.4-29.6 69.1-76.5 96.2z"
                    opacity=".12"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                  <path
                    id="path1229"
                    d="M187.5 35.8l1443 819.8c46.9 26.3 73.2 60.8 77.3 96.2 0-38.6-25.5-77.3-77.3-106.9L187.5 25.1C83.9-34.1 0 15.2 0 133.6v10.7C0 25.9 83.9-22.6 187.5 35.8z"
                    opacity=".25"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#fff"
                  />
                </g>
                <g transform="translate(0 -.008)" id="g1237">
                  <path
                    id="path1233"
                    d="M2060 899.8c0-262.1 220.3-475.5 482.4-475.5 144.9 0 248 56.9 325.8 131l-91.6 91.6c-55.6-52.2-131-92.7-234.3-92.7-191.4 0-341 154.1-341 345.5s149.6 345.7 340.9 345.7c124.1 0 194.7-49.8 240-95.2 37.1-37.1 61.4-90.4 70.8-163.5h-310.6V857.1h437.2c4.6 23.2 7 51 7 81.1 0 97.3-26.7 218-112.6 303.9-83.6 87-190.2 133.4-331.7 133.4-262.2 0-482.5-213.2-482.5-475.5zM3340 763c-169.3 0-307.5 128.8-307.5 306.1 0 176.4 138.1 306.1 307.5 306.1s307.3-129.9 307.3-306.2c0-177.3-138-306.1-307.3-306zm0 491.8c-92.7 0-172.8-76.5-172.8-185.6 0-110.2 80-185.6 172.8-185.6 92.7 0 172.7 75.3 172.7 185.6 0 109-79.9 185.6-172.7 185.6zM4010.5 763c-169.3 0-307.3 128.8-307.3 306.1 0 176.4 138 306.1 307.3 306.1s307.3-129.9 307.3-306.2c0-177.3-137.9-306.1-307.3-306zm0 491.8c-92.7 0-172.8-76.5-172.8-185.6 0-110.2 80-185.6 172.8-185.6 92.7 0 172.8 75.3 172.8 185.6 0 109-80.1 185.6-172.8 185.6zm822.9-473.2v49.8h-4.6c-30.1-36.1-88.1-68.5-161.1-68.5-153.1 0-293.6 134.6-293.6 307.5 0 171.5 140.4 305 293.6 305 73 0 131-32.4 161.1-69.5h4.6v44c0 117.1-62.6 179.8-163.5 179.8-82.4 0-133.4-59.2-154.3-108.9l-117.2 48.7c33.6 81.1 123 180.9 271.4 180.9 157.6 0 291-92.9 291-319V781.5zm-154.2 473.2c-92.7 0-170.6-77.8-170.6-184.4 0-107.8 77.8-186.7 170.6-186.7 91.6 0 163.5 78.8 163.5 186.7.1 106.6-71.8 184.4-163.5 184.4zm374.5-798h134.6v900h-134.6zm503.5 798c-68.4 0-117.2-31.4-148.3-92.7l409.4-169.5-14.1-34.8C5778.8 889.5 5701 763 5542.1 763c-157.7 0-288.8 124.1-288.8 306.2 0 171.5 129.9 306.1 303.9 306.1 140.4 0 221.6-85.7 255.2-135.7l-104.4-69.5c-34.9 51.1-82.5 84.8-150.8 84.7zm-10.5-373.5c53.3 0 98.5 26.7 113.6 64.9l-273.8 113.7c-3.4-118.3 91.7-178.6 160.2-178.6z"
                  />
                  <path
                    id="path1235"
                    d="M6408.9 456.8h-321.8v900h134.3v-340.9H6409c148.9 0 295.3-107.8 295.3-279.6 0-171.5-146.3-279.4-295.1-279.4zm3.5 433.8h-191V582h191c100.4 0 157.6 83.3 157.6 154.3 0 69.8-57.2 154.3-157.6 154.3zm500.2 466.2v-900h-134.3v900zm603.3-1.6v-345c0-159.8-119.4-248.9-273.5-248.9-97.1 0-197.8 42.9-239.5 137.8l119.2 49.7c25.5-49.7 72.9-66 122.8-66 69.4 0 140 41.7 141.1 115.9v9.3c-24.3-13.9-76.3-34.8-140.1-34.8-128.5 0-259.3 70.6-259.3 202.6 0 120.5 105.4 198 223.5 198 90.4 0 140.1-40.5 171.3-87.9h4.6v69.5h129.8zm-289.5-100.6c-44 0-105.4-22-105.4-76.3 0-69.5 76.5-96.3 142.5-96.3 59.1 0 86.8 12.7 122.8 30.1-10.3 80.8-78.6 141.5-159.9 142.5zM7988.2 781l-154 390.1h-4.6L7669.8 781h-144.7l239.6 545.4-136.7 303.3h140.1L8137.4 781z"
                  />
                </g>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default memo(NavBar)
