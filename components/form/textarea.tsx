import { FC, TextareaHTMLAttributes, memo } from 'react'
import Label from './label'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
}
const TextArea: FC<TextAreaProps> = ({ label, ...props }) => {
  const { className, name, rows, ...rest } = props
  return (
    <div className="row">
      <Label htmlFor={name}>{label}</Label>
      <textarea
        id={name}
        name={name}
        rows={rows || 5}
        className={`form-input ${className}`}
        {...rest}
      ></textarea>
    </div>
  )
}
export default memo(TextArea)
