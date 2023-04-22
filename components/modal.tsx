import React, { memo, useEffect, useState } from 'react'
import Link from 'next/link'

import useTerms from '@hooks/useTerms'

import { populateTerms } from '@utils/populateContext'
import { isEmpty } from '@utils/manipulateArray'
import CloseIcon from '/public/images/close.svg'
import { TermTypePlural } from '@utils/interfaces'
import Button from '@components/form/Button'
import Loading from './loading'
import SearchCurriculumForm from './searchCurriculumForm'
import SearchForm from './searchForm'

const Modal = ({ open, setOpen }) => {
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
  const [toggleForm, setToggleForm] = useState(false)

  const closeModal = () => setOpen(!open)
  const changeForm = () => setToggleForm(!toggleForm)

  useEffect(() => {
    if (open && isEmpty(secteurs))
      populateTerms({ type: TermTypePlural.secteurs, setTerms: setSecteurs })
  }, [secteurs, open])

  useEffect(() => {
    if (open && isEmpty(regions))
      populateTerms({ type: TermTypePlural.regions, setTerms: setRegions })
  }, [regions, open])

  useEffect(() => {
    if (open && isEmpty(categories))
      populateTerms({
        type: TermTypePlural.categories,
        setTerms: setCategories,
      })
  }, [categories, open])

  useEffect(() => {
    if (open && isEmpty(niveaux))
      populateTerms({ type: TermTypePlural.niveaux, setTerms: setNiveaux })
  }, [niveaux, open])

  return (
    <dialog onClick={closeModal} id="modal" open={open}>
      <div onClick={(e) => e.stopPropagation()} className="modal-inner">
        <form
          action="/search/"
          className={open ? 'modal-form animate-slideinup' : 'modal-form'}
        >
          <div className="modal-header">
            <div className={toggleForm ? 'flex-row-reverse' : ''}>
              <button
                type="button"
                className={toggleForm ? 'notactive' : ''}
                onClick={changeForm}
                disabled={!toggleForm}
              >
                Recherche par poste
              </button>
              <button
                type="button"
                className={!toggleForm ? 'notactive' : ''}
                onClick={changeForm}
                disabled={toggleForm}
              >
                Recherche par curriculum
              </button>
            </div>
            <button type="button" aria-label="Close" onClick={closeModal}>
              <CloseIcon className="icon" />
            </button>
          </div>
          {isEmpty(secteurs) || isEmpty(regions) || isEmpty(categories) ? (
            <Loading />
          ) : (
            <div className="modal-body">
              {toggleForm ? <SearchCurriculumForm /> : <SearchForm />}
            </div>
          )}
          <div className="modal-footer">
            <Link
              href="https://www.jobrapide.org/admin/"
              className="cta-publish-job"
            >
              Publier une Offre / Post a Job
            </Link>

            <Button type="submit" id="search" className="submit">
              Recherche
            </Button>
          </div>
        </form>
      </div>
    </dialog>
  )
}

export default memo(Modal)
