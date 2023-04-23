import { FC, TextareaHTMLAttributes, memo, forwardRef } from 'react'
import Label from './label'
import { isEmpty } from '@utils/manipulateArray'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
}
const TextArea: FC<TextAreaProps> = ({ label, ...props }) => {
  const { className, name, rows, ...rest } = props
  return (
    <div className="row">
      <Label htmlFor={name}>{label}</Label>
      {isEmpty(rest) ? (
        <textarea
          id={name}
          name={name}
          rows={rows || 5}
          className={`form-input ${className ? className : ''}`}
        ></textarea>
      ) : (
        <textarea
          id={name}
          name={name}
          rows={rows || 5}
          className={`form-input ${className ? className : ''}`}
          {...rest}
        ></textarea>
      )}
    </div>
  )
}
export default memo(TextArea)
