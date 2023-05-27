import React, { FC, memo } from 'react'

import Select from '@components/form/select'
import { Term } from '@utils/interfaces/data'

const SearchCurriculumForm: FC<{
  secteurs?: Term[]
  regions?: Term[]
  niveaux?: Term[]
}> = ({ secteurs, regions, niveaux }) => (
  <div className="animate-slideinup">
    <Select options={niveaux} name="niveau" title="Niveau" />
    <Select options={secteurs} name="secteur" title="Domaine" />
    <Select options={regions} name="region" title="Region" />
  </div>
)

export default memo(SearchCurriculumForm)
