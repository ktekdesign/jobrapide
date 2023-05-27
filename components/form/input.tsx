import { InputHTMLAttributes, LegacyRef, forwardRef, memo, useId } from 'react'
import Label from '@components/form/label'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}
// eslint-disable-next-line react/display-name
const Input = forwardRef(
  ({ label, ...props }: InputProps, ref: LegacyRef<HTMLInputElement>) => {
    const id = useId()
    return (
      <div className="row">
        <Label htmlFor={id}>{label}</Label>
        <input id={id} className="form-input" ref={ref} {...props} />
      </div>
    )
  }
)
export default memo(Input)
