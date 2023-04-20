import React, { memo, useEffect } from 'react'
import Link from 'next/link'

import { actions } from '@context/dataReducer'

import useModal from '@hooks/useModal'
import useTerms from '@hooks/useTerms'

import { populateTerms } from '@utils/populateContext'
import { isEmpty } from '@utils/manipulateArray'
import CloseIcon from '/public/images/close.svg'
import { TermTypePlural } from '@utils/interfaces'
import Button from '@components/form/Button'

const Modal = ({ children }) => {
  const {
    secteurs,
    regions,
    categories,
    niveaux,
    setSecteurs,
    setCategories,
    setNiveaux,
    setRegions,
  } = useTerms()
  const { stateModal, dispatchModal } = useModal()

  const closeModal = () => dispatchModal({ type: actions.SET_TOGGLE_MODAL })
  const toggleForm = () =>
    dispatchModal({ type: actions.SET_TOGGLE_SEARCHFRORM })

  useEffect(() => {
    if (isEmpty(secteurs))
      populateTerms({ type: TermTypePlural.secteurs, setTerms: setSecteurs })

    if (isEmpty(regions))
      populateTerms({ type: TermTypePlural.regions, setTerms: setRegions })

    if (isEmpty(categories))
      populateTerms({
        type: TermTypePlural.categories,
        setTerms: setCategories,
      })

    if (isEmpty(niveaux))
      populateTerms({ type: TermTypePlural.niveaux, setTerms: setNiveaux })
  }, [secteurs, regions, categories, niveaux])

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
              <CloseIcon className="icon" />
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

            <Button type="submit" className="submit">
              Recherche
            </Button>
          </div>
        </form>
      </div>
    </dialog>
  )
}

export default memo(Modal)
