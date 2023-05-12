import React, { FC, memo } from 'react'

import Select from '@components/form/select'
import { Term } from '@utils/interfaces/data'

const SearchCurriculumForm: FC<{
  secteurs?: Term[]
  regions?: Term[]
  niveaux?: Term[]
}> = ({ secteurs, regions, niveaux }) => (
  <div className="animate-slideinup">
    <Select options={niveaux} id="niveau" label="Niveau" />
    <Select options={secteurs} id="secteur" label="Domaine" />
    <Select options={regions} id="region" label="Region" />
  </div>
)

export default memo(SearchCurriculumForm)
