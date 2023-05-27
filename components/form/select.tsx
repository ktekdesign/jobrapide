import { memo, useId } from 'react'
import Label from '@components/form/label'
import MappedComponent from '@components/loaders/mapped-component'
import ParsedComponent from '@components/parsed-component'
import { getSelectProps } from '@utils/getSelectProps'
import StringComponent from '@components/loaders/string-component'

const Select = ({ title, options, ...props }) => {
  const id = useId()

  return (
    <StringComponent as="div" cond={options?.length} className="row">
      <Label htmlFor={id}>{title}</Label>
      <div className="relative">
        <select id={id} className="form-select" {...props}>
          <MappedComponent items={getSelectProps(options)}>
            <ParsedComponent as="option" />
          </MappedComponent>
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
    </StringComponent>
  )
}
export default memo(Select)
