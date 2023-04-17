import React, { memo } from 'react'

import useModal from '@hooks/useModal'
import useTerms from '@hooks/useTerms'

import Select from '@components/form/select'
import Label from '@components/form/label'

const SearchCurriculumForm = () => {
  const { stateModal } = useModal()
  const { stateTerms } = useTerms()

  const { secteurs, regions, niveaux } = stateTerms
  const { toggleSearchForm } = stateModal

  if (!toggleSearchForm) return <></>

  return (
    <div className="animate-slideinup">
      {!!niveaux?.length && (
        <div className="row">
          <Label title="Niveaux" htmlFor="niveau" />
          <Select options={niveaux} id="niveau" />
        </div>
      )}
      {!!secteurs?.length && (
        <div className="row">
          <Label title="Domaine" htmlFor="secteur" />
          <Select options={secteurs} id="secteur" />
        </div>
      )}
      {!!regions?.length && (
        <div className="row">
          <Label title="Region" htmlFor="region" />
          <Select options={regions} id="region" />
        </div>
      )}
    </div>
  )
}

export default memo(SearchCurriculumForm)
