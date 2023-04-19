import React, { memo, useEffect } from 'react'
import Link from 'next/link'

import { actions } from '@context/dataReducer'

import useModal from '@hooks/useModal'
import useTerms from '@hooks/useTerms'

import { populateTerms } from '@utils/populateContext'
import { isEmpty } from '@utils/manipulateArray'

const Modal = ({ children }) => {
  const { stateTerms, dispatchTerms } = useTerms()
  const { stateModal, dispatchModal } = useModal()

  const closeModal = () => dispatchModal({ type: actions.SET_TOGGLE_MODAL })
  const toggleForm = () =>
    dispatchModal({ type: actions.SET_TOGGLE_SEARCHFRORM })

  useEffect(() => {
    const { secteurs, regions, categories, niveaux } = stateTerms

    if (isEmpty(secteurs)) populateTerms('secteurs', dispatchTerms)

    if (isEmpty(regions)) populateTerms('regions', dispatchTerms)

    if (isEmpty(categories)) populateTerms('categories', dispatchTerms)

    if (isEmpty(niveaux)) populateTerms('niveaux', dispatchTerms)
  }, [])

  return (
    <dialog onClick={closeModal} id="modal" open={stateModal.toggleModal}>
      <div onClick={(e) => e.stopPropagation()} className="modal-inner">
        <form
          action="/search/"
          className={
            stateModal.toggleModal
              ? 'modal-form animate-slideinup'
              : 'modal-form'
          }
        >
          <div className="modal-header">
            <div
              className={stateModal.toggleSearchForm ? 'flex-row-reverse' : ''}
            >
              <button
                type="button"
                className={stateModal.toggleSearchForm ? 'notactive' : ''}
                onClick={toggleForm}
                disabled={!stateModal.toggleSearchForm}
              >
                Recherche par poste
              </button>
              <button
                type="button"
                className={!stateModal.toggleSearchForm ? 'notactive' : ''}
                onClick={toggleForm}
                disabled={stateModal.toggleSearchForm}
              >
                Recherche par curriculum
              </button>
            </div>
            <button type="button" aria-label="Close" onClick={closeModal}>
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

          <div className="modal-body">{children}</div>

          <div className="modal-footer">
            <Link
              href="https://www.jobrapide.org/admin/"
              className="cta-publish-job"
            >
              Publier une Offre / Post a Job
            </Link>

            <button type="submit" className="modal-submit-button">
              Recherche
            </button>
          </div>
        </form>
      </div>
    </dialog>
  )
}

export default memo(Modal)
