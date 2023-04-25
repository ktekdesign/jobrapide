import React, { FC, memo } from 'react'

import Select from '@components/form/select'
import Input from '@components/form/input'
import { useQuery, gql } from '@apollo/client'
import { categoriesQuery } from '@graphql/termQueries'
import { mapTerm } from '@utils/mapping'
import { Term } from '@utils/interfaces/data'

const SearchForm: FC<{ secteurs?: Term[]; regions?: Term[] }> = ({
  secteurs = null,
  regions = null,
}) => {
  const QUERYCATEGORIES = gql`
    ${categoriesQuery}
  `
  const { data: categoriesQL } = useQuery(QUERYCATEGORIES)
  const categories = categoriesQL
    ? categoriesQL?.categories.nodes.map((category) => mapTerm(category))
    : null

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
