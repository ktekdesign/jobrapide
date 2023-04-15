import Link from 'next/link'
import React, { memo, useEffect } from 'react'
import { actions } from '../context/dataReducer'
import useModal from '../context/useModal'
import useTerms from '../context/useTerms'
import { populateTerms } from '../utils/populateContext'
import styles from './modal.module.css'

const Modal = ({ children }) => {
  const { state, dispatch } = useModal()
  const { state: stateTerms, dispatch: dispatchTerms } = useTerms()
  const closeModal = () => dispatch({ type: actions.SET_TOGGLE_MODAL })
  const toggleForm = () => dispatch({ type: actions.SET_TOGGLE_SEARCHFRORM })

  const { secteurs, regions, categories, niveaux } = stateTerms

  useEffect(() => {
    if (!secteurs?.length) {
      populateTerms('secteurs', dispatchTerms)
    }
    if (!regions?.length) {
      populateTerms('regions', dispatchTerms)
    }
    if (!categories?.length) {
      populateTerms('categories', dispatchTerms)
    }
    if (!niveaux?.length) {
      populateTerms('niveaux', dispatchTerms)
    }
  }, [])

  if (!state.toggleModal) return <></>
  return (
    <div
      className="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none dark:bg-neutral-800 dark:bg-opacity-80"
      onClick={closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
      >
        <form className="w-full">
          <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <div
                className={`flex-grow flex justify-between mr-4 font-bold ${
                  state.toggleSearchForm ? 'flex-row-reverse' : ''
                }`}
              >
                <button
                  type="button"
                  className={state.toggleSearchForm ? styles.notactive : ''}
                  onClick={toggleForm}
                  disabled={!state.toggleSearchForm}
                >
                  Recherche par poste
                </button>
                <button
                  type="button"
                  className={!state.toggleSearchForm ? styles.notactive : ''}
                  onClick={toggleForm}
                  disabled={state.toggleSearchForm}
                >
                  Recherche par curriculum
                </button>
              </div>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close"
                onClick={closeModal}
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="relative p-4 bg-slate-300">{children}</div>

            <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <Link
                href="https://www.jobrapide.org/admin/"
                className="mr-auto border-white bg-secondary border p-2 text-xs font-medium uppercase leading-normal rounded text-white"
              >
                Publier une Offre / Post a Job
              </Link>

              <button
                type="button"
                className="ml-1 inline-block rounded bg-primary p-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Recherche
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default memo(Modal)
