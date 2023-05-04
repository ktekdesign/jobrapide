import { isEmpty } from '@utils/manipulateArray'
import React, { FC, SelectHTMLAttributes, memo } from 'react'
import Label from '@components/form/label'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: {
    id?: number | string
    name?: string
  }[]
}
const Select: FC<SelectProps> = ({ label, options, ...props }) => {
  if (isEmpty(options)) return <></>
  const { name, ...rest } = props
  return (
    <div className="row">
      <Label htmlFor={name}>{label}</Label>
      <div className="relative">
        <select id={name} name={name} className="form-select" {...rest}>
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
