import React, {
  Dispatch,
  memo,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './header.module.css'
import { NextRouter, useRouter } from 'next/router'
import Modal from './modal'
import SearchForm from './searchForm'
import useModal from '../context/useModal'
import { actions } from '../context/dataReducer'
import SearchCurriculumForm from './searchCurriculumForm'
import Pub from './pub'

const Header = () => {
  const { dispatch } = useModal()
  const [showMenu, setShowMenu] = useState(false)
  const [currentPath, setCurrentPath]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState('')
  const router: NextRouter = useRouter()

  useEffect(() => {
    setCurrentPath(router.asPath)
    setShowMenu(false)
  }, [router])

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-primary p-4 sticky top-0 z-10">
        <div className="flex flex-shrink-0 items-center text-white mr-4">
          <Link href="/" className="flex flex-shrink-0 items-center gap-2">
            <Image
              className="bg-white rounded-3xl shadow-xl hover:animate-pulse"
              src="https://www.jobrapide.org/wp-content/uploads/2022/12/cropped-Job-6-270x270.png"
              width={50}
              height={50}
              alt="Logo"
            />
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
            <span className="font-semibold text-xl tracking-tight">
              JobRapide
            </span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            onClick={() => setShowMenu(!showMenu)}
          >
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
        <div
          className={`w-full ${
            showMenu ? 'flex' : 'hidden'
          } flex-grow flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap lg:flex lg:justify-between lg:items-center lg:w-auto`}
        >
          <div className="text-sm flex flex-col flex-wrap lg:flex-row lg:items-center">
            <Link
              href="/recrutement/offres/avis-recrutement"
              className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:text-secondary hover:font-bold lg:mr-4 py-2 ${
                currentPath == '/recrutement/offres/avis-recrutement' &&
                styles.active
              }`}
            >
              Emploi
            </Link>
            <Link
              href="/recrutement/offres/stage"
              className={`block lg:inline-block text-white hover:text-secondary hover:font-bold lg:mr-4 py-2 ${
                currentPath == '/recrutement/offres/stage' && styles.active
              }`}
            >
              Stage
            </Link>
            <Link
              href="/recrutement/offres/avis-appel-offres"
              className={`block lg:inline-block text-white hover:text-secondary hover:font-bold lg:mr-4 py-2 ${
                currentPath == '/recrutement/offres/avis-appel-offres' &&
                styles.active
              }`}
            >
              Avis d'appel d'offres
            </Link>
            <Link
              href="/recrutement/offres/bourses-etude"
              className={`block lg:inline-block text-white hover:text-secondary hover:font-bold lg:mr-4 py-2 ${
                currentPath == '/recrutement/offres/bourses-etude' &&
                styles.active
              }`}
            >
              Bourses
            </Link>
            <Link
              href="/recrutement/offres/concours"
              className={`block lg:inline-block text-white hover:text-secondary hover:font-bold lg:mr-4 py-2 ${
                currentPath == '/recrutement/offres/concours' && styles.active
              }`}
            >
              Concours
            </Link>
            <Link
              href="/recrutement/offres/volontaire"
              className={`block lg:inline-block text-white hover:text-secondary hover:font-bold lg:mr-4 py-2 ${
                currentPath == '/recrutement/offres/volontaire' && styles.active
              }`}
            >
              Volontaire
            </Link>
            <Link
              href="/recrutement/offres/call-for-papers"
              className={`block lg:inline-block text-white hover:text-secondary hover:font-bold lg:mr-4 py-2 ${
                currentPath == '/recrutement/offres/call-for-papers' &&
                styles.active
              }`}
            >
              Call for Papers
            </Link>
            <Link
              href="/recrutement/offres/formations"
              className={`block lg:inline-block text-white hover:text-secondary hover:font-bold lg:mr-4 py-2 ${
                currentPath == '/recrutement/offres/formations' && styles.active
              }`}
            >
              Formations
            </Link>
            <Link
              href="/recrutement/actualites"
              className={`block lg:inline-block text-white hover:text-secondary hover:font-bold lg:mr-4 py-2 ${
                currentPath == '/recrutement/actualites' && styles.active
              }`}
            >
              Actualités
            </Link>
            <Link
              href="/contact"
              className={`block lg:inline-block text-white hover:text-secondary hover:font-bold lg:mr-4 py-2 ${
                currentPath == '/contact' && styles.active
              }`}
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center justify-end gap-4 lg:gap-1">
            <div className={styles.reveal}>
              <Link
                href="https://www.jobrapide.org/admin/"
                title="Login / Créer un compte"
                className="flex py-2 border-white bg-secondary border rounded px-2 transition-all duration-200 items-center text-sm leading-none text-white hover:border-transparent hover:text-primary hover:bg-white mt-4 lg:mt-0 lg:bg-transparent lg:border-transparent"
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
            </div>
            <div className={styles.reveal}>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  dispatch({ type: actions.SET_TOGGLE_MODAL })
                }}
                title="Faire une recherche"
                className="flex py-2 border-white bg-secondary border rounded px-2 transition-all duration-200 items-center text-sm leading-none text-white hover:border-transparent hover:text-primary hover:bg-white mt-4 lg:mt-0 lg:bg-transparent lg:border-transparent"
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
            </div>
            <div className={`lg:hidden ${styles.reveal}`}>
              <Link
                href="#"
                title="Télecharger notre application Android"
                className="flex py-2 border-white bg-secondary border rounded px-2 transition-all duration-200 items-center text-sm leading-none text-white hover:border-transparent hover:text-primary hover:bg-white mt-4 lg:mt-0 lg:bg-transparent lg:border-transparent"
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
                    d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Modal>
        <SearchCurriculumForm />
        <SearchForm />
      </Modal>
      <Pub term="/recrutement/publicite/pub-niveau-2/" />
    </>
  )
}

export default memo(Header)
