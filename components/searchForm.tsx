import React, { memo } from 'react'

import useModal from '@hooks/useModal'
import useTerms from '@hooks/useTerms'

import Select from '@components/form/select'
import Label from '@components/form/label'
import Input from '@components/form/input'

const SearchForm = () => {
  const { stateModal } = useModal()
  const { stateTerms } = useTerms()

  const { categories, secteurs, regions } = stateTerms
  const { toggleSearchForm } = stateModal

  if (toggleSearchForm) return <></>

  return (
    <div className="animate-slideinup">
      <div className="row">
        <Label title="Poste" htmlFor="fonction" />
        <Input id="fonction" />
      </div>
      {!!categories?.length && (
        <div className="row">
          <Label title="Categorie" htmlFor="category" />
          <Select options={categories} id="category" />
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

export default memo(SearchForm)
