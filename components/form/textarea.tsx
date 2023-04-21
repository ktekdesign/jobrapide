import { FC, TextareaHTMLAttributes, memo } from 'react'
import Label from './label'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  label: string
}
const TextArea: FC<TextAreaProps> = ({ id, label, ...props }) => {
  const { className, rows, ...rest } = props
  return (
    <div className="row">
      <Label htmlFor={id}>{label}</Label>
      <textarea
        id={id}
        name={id}
        rows={rows || 5}
        className={`form-input ${className}`}
        {...rest}
      ></textarea>
    </div>
  )
}
export default memo(TextArea)
