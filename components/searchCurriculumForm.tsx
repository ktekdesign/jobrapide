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
    <>
      {!!niveaux?.length && (
        <div className="row">
          <Label title="Niveaux" htmlFor="grid-state" />
          <Select options={niveaux} />
        </div>
      )}
      {!!secteurs?.length && (
        <div className="row">
          <Label title="Domaine" htmlFor="grid-state" />
          <Select options={secteurs} />
        </div>
      )}
      {!!regions?.length && (
        <div className="row">
          <Label title="Region" htmlFor="grid-state" />
          <Select options={regions} />
        </div>
      )}
    </>
  )
}

export default memo(SearchCurriculumForm)
