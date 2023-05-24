import { ADMIN_URL } from '@utils/constants'
import Button from '@components/form/Button'
import SeoLink from '@components/seoLink'
import SearchCurriculumForm from '@components/searchCurriculumForm'
import SearchForm from '@components/searchForm'
import OnboardingFlow from '@components/loaders/onboardingFlow'
import { memo, useCallback, useState } from 'react'
import secteurs from '@utils/data/secteurs.json'
import regions from '@utils/data/regions.json'

const Search = () => {
  const [active, setActive] = useState(false)

  const changeForm = useCallback(() => setActive(!active), [active])

  return (
    <form action="/search/" className="modal-form animate-slideinup">
      <div className="modal-header">
        <div onClick={changeForm} data-active={active}>
          <Button label="Recherche par poste" disabled={!active}>
            Recherche par poste
          </Button>
          <Button label="Recherche par curriculum" disabled={active}>
            Recherche par curriculum
          </Button>
        </div>
      </div>

      <div className="modal-body">
        <OnboardingFlow
          data={{
            secteurs,
            regions,
          }}
          active={Number(active)}
        >
          <SearchForm />
          <SearchCurriculumForm />
        </OnboardingFlow>
      </div>

      <div className="modal-footer">
        <SeoLink
          href={ADMIN_URL}
          className="cta-publish-job"
          title="Publier une Offre"
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
