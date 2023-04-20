import React, { memo } from 'react'

import useModal from '@hooks/useModal'
import useTerms from '@hooks/useTerms'

import Select from '@components/form/select'
import Label from '@components/form/label'
import { isEmpty } from '@utils/manipulateArray'

const SearchCurriculumForm = () => {
  const { stateModal } = useModal()
  const { secteurs, regions, niveaux } = useTerms()

  const { toggleSearchForm } = stateModal

  if (!toggleSearchForm) return <></>

  return (
    <div className="animate-slideinup">
      {!isEmpty(niveaux) && (
        <div className="row">
          <Label title="Niveaux" htmlFor="niveau" />
          <Select options={niveaux} id="niveau" />
        </div>
      )}
      {!isEmpty(secteurs) && (
        <div className="row">
          <Label title="Domaine" htmlFor="secteur" />
          <Select options={secteurs} id="secteur" />
        </div>
      )}
      {!isEmpty(regions) && (
        <div className="row">
          <Label title="Region" htmlFor="region" />
          <Select options={regions} id="region" />
        </div>
      )}
    </div>
  )
}

export default memo(SearchCurriculumForm)
