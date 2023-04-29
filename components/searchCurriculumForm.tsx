import React, { FC, memo } from 'react'

import Select from '@components/form/select'
import { Term } from '@utils/interfaces/data'
import { useTerms } from '@hooks/useTerms'

const SearchCurriculumForm: FC<{ secteurs?: Term[]; regions?: Term[] }> = ({
  secteurs,
  regions,
}) => {
  const { data: niveaux } = useTerms('niveaux')

  return (
    <div className="animate-slideinup">
      <Select options={niveaux?.terms} id="niveau" label="Niveau" />
      <Select options={secteurs} id="secteur" label="Domaine" />
      <Select options={regions} id="region" label="Region" />
    </div>
  )
}

export default memo(SearchCurriculumForm)
