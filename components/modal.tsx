import React, { memo, useState } from 'react'

import CloseIcon from '/public/images/close.svg'
import Button from '@components/form/Button'
import SearchCurriculumForm from '@components/searchCurriculumForm'
import SearchForm from '@components/searchForm'
import SeoLink from '@components/seoLink'
import OnboardingFlow from '@components/onboardingFlow'
import secteurs from '@utils/data/secteurs.json'
import regions from '@utils/data/regions.json'
import niveaux from '@utils/data/niveaux.json'
import categories from '@utils/data/categories.json'

import { ADMIN_URL } from '@utils/constants'

const Modal = ({ setOpen = null }) => {
  const [toggleForm, setToggleForm] = useState(false)

  const closeModal = () => setOpen(false)
  const changeForm = () => setToggleForm(!toggleForm)

  return (
    <dialog onClick={closeModal} id="modal" open={true}>
      <div onClick={(e) => e.stopPropagation()} className="modal-inner">
        <form action="/search/" className="modal-form animate-slideinup">
          <div className="modal-header">
            <div
              onClick={changeForm}
              className={toggleForm ? 'flex-row-reverse' : ''}
            >
              <Button
                label="Recherche par poste"
                className={toggleForm ? 'notactive' : ''}
                disabled={!toggleForm}
              >
                Recherche par poste
              </Button>
              <Button
                label="Recherche par curriculum"
                className={!toggleForm ? 'notactive' : ''}
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
            <OnboardingFlow
              data={{
                secteurs,
                regions,
                niveaux,
                categories: categories.filter(
                  (category) => category.parentId === 16
                ),
              }}
              active={Number(toggleForm)}
            >
              <SearchForm />
              <SearchCurriculumForm />
            </OnboardingFlow>
          </div>

          <div className="modal-footer">
            <SeoLink
              href={ADMIN_URL}
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
