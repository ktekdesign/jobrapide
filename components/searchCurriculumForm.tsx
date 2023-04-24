import React, { FC, memo } from 'react'

import Select from '@components/form/select'
import { useQuery, gql } from '@apollo/client'
import { getNiveauxQuery } from '@graphql/termQueries'
import { mapTerm } from '@utils/mapping'
import { Term } from '@utils/interfaces'

const SearchCurriculumForm: FC<{ secteurs?: Term[]; regions?: Term[] }> = ({
  secteurs,
  regions,
}) => {
  const QUERYNIVEAUX = gql`
    ${getNiveauxQuery()}
  `
  const { data: niveauxQL } = useQuery(QUERYNIVEAUX)
  const niveaux = niveauxQL
    ? niveauxQL?.niveaux.nodes.map((secteur) => mapTerm(secteur))
    : null

  return (
    <div className="animate-slideinup">
      <Select options={niveaux} id="niveau" label="Niveau" />
      <Select options={secteurs} id="secteur" label="Domaine" />
      <Select options={regions} id="region" label="Region" />
    </div>
  )
}

export default memo(SearchCurriculumForm)
