import { Term } from '@utils/interfaces'
import { isEmpty } from '@utils/manipulateArray'
import React, { FC, SelectHTMLAttributes, memo } from 'react'
import Label from './label'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string
  label: string
  options:
    | Term[]
    | {
        id: number | string
        name: string
      }[]
}
const Select: FC<SelectProps> = ({ id, label, options, ...props }) => {
  if (isEmpty(options)) return <></>
  return (
    <div className="row">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <select id={id} name={id} className="form-select" {...props}>
          {options?.map(({ id, name }) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
        </select>
        <div className="form-select-icon">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default memo(Select)
