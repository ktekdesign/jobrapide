import React, { memo, useState } from 'react'
import Link from 'next/link'

import { isEmpty } from '@utils/manipulateArray'
import CloseIcon from '/public/images/close.svg'
import Button from '@components/form/Button'
import Loading from './loading'
import SearchCurriculumForm from './searchCurriculumForm'
import SearchForm from './searchForm'
import { useQuery, gql } from '@apollo/client'
import {
  regionsLastQuery,
  regionsQuery,
  getSecteursQuery,
} from '@graphql/termQueries'
import { mapTerm } from '@utils/mapping'

const Modal = ({ open, setOpen }) => {
  const [toggleForm, setToggleForm] = useState(false)

  const closeModal = () => setOpen(!open)
  const changeForm = () => setToggleForm(!toggleForm)

  const QUERYREGIONS = gql`
    ${regionsQuery}
  `
  const QUERYREGIONSLAST = gql`
    ${regionsLastQuery}
  `
  const { data, loading } = useQuery(QUERYREGIONS)
  const { data: last } = useQuery(QUERYREGIONSLAST)

  const QUERYSECTEURS = gql`
    ${getSecteursQuery()}
  `
  const { data: secteursQL } = useQuery(QUERYSECTEURS)

  const allRegions =
    data && last ? [...data.regions.nodes, ...last.regions.nodes] : []

  const regions = !isEmpty(allRegions)
    ? allRegions?.map((region) => mapTerm(region))
    : null
  const secteurs = secteursQL
    ? secteursQL?.secteurs.nodes.map((secteur) => mapTerm(secteur))
    : null

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

          <div className="modal-body">
            <Loading loading={loading} error={false}>
              {toggleForm ? (
                <SearchCurriculumForm secteurs={secteurs} regions={regions} />
              ) : (
                <SearchForm secteurs={secteurs} regions={regions} />
              )}
            </Loading>
          </div>

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
