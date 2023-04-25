import React, { memo, useState } from 'react'

import { isEmpty } from '@utils/manipulateArray'
import CloseIcon from '/public/images/close.svg'
import Button from '@components/form/Button'
import Loading from '@components/loading'
import SearchCurriculumForm from '@components/searchCurriculumForm'
import SearchForm from '@components/searchForm'
import { useQuery, gql } from '@apollo/client'
import {
  regionsLastQuery,
  regionsQuery,
  getSecteursQuery,
} from '@graphql/termQueries'
import { mapTerm } from '@utils/mapping'
import SeoLink from '@components/seoLink'

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
              <Button
                label="Recherche par poste"
                className={toggleForm ? 'notactive' : ''}
                onClick={changeForm}
                disabled={!toggleForm}
              >
                Recherche par poste
              </Button>
              <Button
                label="Recherche par curriculum"
                className={!toggleForm ? 'notactive' : ''}
                onClick={changeForm}
                disabled={toggleForm}
              >
                Recherche par curriculum
              </Button>
            </div>
            <Button type="button" label="Close" onClick={closeModal}>
              <CloseIcon className="icon" />
            </Button>
          </div>

          <div className="modal-body">
            <Loading
              data={{ secteurs, regions }}
              loading={loading}
              error={false}
            >
              {toggleForm ? <SearchCurriculumForm /> : <SearchForm />}
            </Loading>
          </div>

          <div className="modal-footer">
            <SeoLink
              href="https://www.jobrapide.org/admin/"
              className="cta-publish-job"
              label="Publier une Offre"
            >
              Publier une Offre / Post a Job
            </SeoLink>

            <Button
              type="submit"
              id="search"
              label="Recherche"
              className="submit"
            >
              Recherche
            </Button>
          </div>
        </form>
      </div>
    </dialog>
  )
}

export default memo(Modal)
