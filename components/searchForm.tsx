import React, { FC, memo } from 'react'

import Select from '@components/form/select'
import Input from '@components/form/input'
import { Term } from '@utils/interfaces/data'
import { useTerms } from '@hooks/useTerms'

const SearchForm: FC<{ secteurs?: Term[]; regions?: Term[] }> = ({
  secteurs,
  regions,
}) => {
  const { data: categories } = useTerms('categories')

  return (
    <div className="animate-slideinup">
      <Input name="s" label="Fonction" />
      <Select label="Categorie" options={categories?.terms} name="category" />
      <Select label="Secteur" options={secteurs} name="secteur" />
      <Select label="Region" options={regions} name="region" />
    </div>
  )
}
export default memo(SearchForm)
