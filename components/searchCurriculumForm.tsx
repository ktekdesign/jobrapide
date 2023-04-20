import React, { memo } from 'react'

import useModal from '@hooks/useModal'
import useTerms from '@hooks/useTerms'

import Select from '@components/form/select'

const SearchCurriculumForm = () => {
  const { stateModal } = useModal()
  const { secteurs, regions, niveaux } = useTerms()

  const { toggleSearchForm } = stateModal

  if (!toggleSearchForm) return <></>

  return (
    <div className="animate-slideinup">
      <Select options={niveaux} id="niveau" label="Niveau" />
      <Select options={secteurs} id="secteur" label="Domaine" />
      <Select options={regions} id="region" label="Region" />
    </div>
  )
}

export default memo(SearchCurriculumForm)
