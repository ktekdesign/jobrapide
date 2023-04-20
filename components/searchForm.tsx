import React, { memo } from 'react'

import useModal from '@hooks/useModal'
import useTerms from '@hooks/useTerms'

import Select from '@components/form/select'
import Label from '@components/form/label'
import Input from '@components/form/input'
import { isEmpty } from '@utils/manipulateArray'

const SearchForm = () => {
  const { stateModal } = useModal()
  const { categories, secteurs, regions } = useTerms()

  if (stateModal.toggleSearchForm) return <></>

  return (
    <div className="animate-slideinup">
      <div className="row">
        <Label title="Poste" htmlFor="fonction" />
        <Input name="s" id="fonction" />
      </div>
      {!isEmpty(categories) && (
        <div className="row">
          <Label title="Categorie" htmlFor="category" />
          <Select name="category" options={categories} id="category" />
        </div>
      )}
      {!isEmpty(secteurs) && (
        <div className="row">
          <Label title="Domaine" htmlFor="secteur" />
          <Select name="secteur" options={secteurs} id="secteur" />
        </div>
      )}
      {!isEmpty(regions) && (
        <div className="row">
          <Label title="Region" htmlFor="region" />
          <Select name="region" options={regions} id="region" />
        </div>
      )}
    </div>
  )
}

export default memo(SearchForm)
