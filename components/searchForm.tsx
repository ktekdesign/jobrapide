import React, { FC, memo } from 'react'

import Select from '@components/form/select'
import Input from '@components/form/input'
import { Term } from '@utils/interfaces/data'
import categories from '@utils/data/categories.json'

const filteredCategories = categories.filter(
  (category) => category.parentid === 16
)

const SearchForm: FC<{
  secteurs?: Term[]
  regions?: Term[]
}> = ({ secteurs, regions }) => (
  <div className="animate-slideinup">
    <Input name="s" label="Fonction" />
    <Select title="Categorie" options={filteredCategories} name="category" />
    <Select title="Secteur" options={secteurs} name="secteur" />
    <Select title="Region" options={regions} name="region" />
  </div>
)

export default memo(SearchForm)
