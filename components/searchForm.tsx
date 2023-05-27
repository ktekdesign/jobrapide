import React, { FC, memo } from 'react'

import Select from '@components/form/select'
import Input from '@components/form/input'
import { Term } from '@utils/interfaces/data'

const SearchForm: FC<{
  secteurs?: Term[]
  regions?: Term[]
  categories?: Term[]
}> = ({ secteurs, regions, categories }) => (
  <div className="animate-slideinup">
    <Input name="s" label="Fonction" />
    <Select title="Categorie" options={categories} name="category" />
    <Select title="Secteur" options={secteurs} name="secteur" />
    <Select title="Region" options={regions} name="region" />
  </div>
)

export default memo(SearchForm)
