import React, { memo } from 'react'

import useModal from '@hooks/useModal'
import useTerms from '@hooks/useTerms'

import Select from '@components/form/select'
import Label from '@components/form/label'
import Input from '@components/form/input'

const SearchForm = () => {
  const { stateModal } = useModal()
  const { stateTerms } = useTerms()

  const { categories, secteurs, regions } = stateTerms
  const { toggleSearchForm } = stateModal

  if (toggleSearchForm) return <></>

  return (
    <>
      <div className="row">
        <Label title="Poste" htmlFor="grid-first-name" />
        <Input id="grid-first-name" />
      </div>
      {!!categories?.length && (
        <div className="row">
          <Label title="Categorie" htmlFor="grid-state" />
          <Select options={categories} />
        </div>
      )}
      {!!secteurs?.length && (
        <div className="row">
          <Label title="Domaine" htmlFor="grid-state" />
          <Select options={secteurs} />
        </div>
      )}
      {!!regions?.length && (
        <div className="row">
          <Label title="Region" htmlFor="grid-state" />
          <Select options={regions} />
        </div>
      )}
    </>
  )
}

export default memo(SearchForm)
