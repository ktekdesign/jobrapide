import React, { memo } from 'react'

import useTerms from '@hooks/useTerms'

import Select from '@components/form/select'
import Input from '@components/form/input'

const SearchForm = () => {
  const { categories, secteurs, regions } = useTerms()

  return (
    <div className="animate-slideinup">
      <Input name="s" label="Fonction" />
      <Select label="Categorie" options={categories} name="category" />
      <Select label="Secteur" options={secteurs} name="secteur" />
      <Select label="Region" options={regions} name="region" />
    </div>
  )
}
export default memo(SearchForm)
