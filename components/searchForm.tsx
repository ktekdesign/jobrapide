import React, { memo } from 'react'

import Select from '@components/form/select'
import Input from '@components/form/input'
import { useQuery, gql } from '@apollo/client'
import { categoriesQuery } from '@graphql/termQueries'
import { mapTerm } from '@utils/mapping'

const SearchForm = ({ secteurs, regions }) => {
  const QUERYCATEGORIES = gql`
    ${categoriesQuery}
  `
  const { data: categoriesQL } = useQuery(QUERYCATEGORIES)
  const categories = categoriesQL
    ? categoriesQL?.categories.nodes.map((secteur) => mapTerm(secteur))
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
