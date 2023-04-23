import { FC, InputHTMLAttributes, memo } from 'react'
import Label from '@components/form/label'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}
const Input: FC<InputProps> = ({ label, ...props }) => {
  const { className, name, ...rest } = props
  return (
    <div className="row">
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        name={name}
        className={`form-input ${className}`}
        {...rest}
      />
    </div>
  )
}
export default memo(Input)
