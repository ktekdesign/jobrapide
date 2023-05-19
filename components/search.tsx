import { ADMIN_URL } from '@utils/constants'
import Button from './form/Button'
import SeoLink from './seoLink'
import SearchCurriculumForm from './searchCurriculumForm'
import SearchForm from './searchForm'
import OnboardingFlow from './onboardingFlow'
import { memo, useCallback, useState } from 'react'
import secteurs from '@utils/data/secteurs.json'
import regions from '@utils/data/regions.json'
import niveaux from '@utils/data/niveaux.json'
import categories from '@utils/data/categories.json'

const Search = () => {
  const [active, setActive] = useState(0)

  const changeForm = useCallback(
    () => setActive(active ? active - 1 : active + 1),
    [active]
  )

  return (
    <form action="/search/" className="modal-form animate-slideinup">
      <div className="modal-header">
        <div onClick={changeForm} className={active ? 'flex-row-reverse' : ''}>
          <Button
            label="Recherche par poste"
            className={active ? 'notactive' : ''}
            disabled={!active}
          >
            Recherche par poste
          </Button>
          <Button
            label="Recherche par curriculum"
            className={!active ? 'notactive' : ''}
            disabled={!!active}
          >
            Recherche par curriculum
          </Button>
        </div>
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
          active={active}
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

        <Button type="submit" id="search" label="Recherche" className="submit">
          Recherche
        </Button>
      </div>
    </form>
  )
}

export default memo(Search)
