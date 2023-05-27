import { ADMIN_URL } from '@utils/constants'
import Button from '@components/form/Button'
import SeoLink from '@components/seoLink'
import SearchCurriculumForm from '@components/searchCurriculumForm'
import SearchForm from '@components/searchForm'
import OnboardingFlow from '@components/loaders/onboardingFlow'
import { memo, useCallback, useState } from 'react'
import useTerms from '@hooks/useTerms'

const Search = () => {
  const [active, setActive] = useState(false)
  const secteurs = useTerms('secteurs')
  const regions = useTerms('regions')
  const categories = useTerms('categories')
  const niveaux = useTerms('niveaux')

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
            categories,
            niveaux,
          }}
          loading={!regions.length || !secteurs.length || !categories.length}
          active={Number(active)}
        >
          <SearchForm />
          <SearchCurriculumForm />
        </OnboardingFlow>
      </div>

      <div className="modal-footer">
        <SeoLink
          href={ADMIN_URL}
          as="span"
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
