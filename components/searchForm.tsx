import React, { memo } from 'react'

import useModal from '@hooks/useModal'
import useTerms from '@hooks/useTerms'

import Select from '@components/form/select'
import Input from '@components/form/input'

const SearchForm = () => {
  const { stateModal } = useModal()
  const { categories, secteurs, regions } = useTerms()

  if (stateModal.toggleSearchForm) return <></>

  return (
    <div className="animate-slideinup">
      <Input name="s" id="fonction" label="Fonction" />
      <Select options={categories} id="category" label="Categorie" />
      <Select label="Secteur" options={secteurs} id="secteur" />
      <Select label="Region" options={regions} id="region" />
    </div>
  )
}
export default memo(SearchForm)
