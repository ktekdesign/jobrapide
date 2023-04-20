import { FC, InputHTMLAttributes, memo } from 'react'
import Label from '@components/form/label'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
}
const Input: FC<InputProps> = ({ id, label, ...props }) => {
  const { className, ...rest } = props
  return (
    <div className="row">
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        name={id}
        className={`form-input ${className}`}
        {...rest}
      />
    </div>
  )
}
export default memo(Input)
