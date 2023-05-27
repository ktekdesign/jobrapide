import {
  LegacyRef,
  TextareaHTMLAttributes,
  forwardRef,
  memo,
  useId,
} from 'react'
import Label from '@components/form/label'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
}
// eslint-disable-next-line react/display-name
const TextArea = forwardRef(
  ({ label, ...props }: TextAreaProps, ref: LegacyRef<HTMLTextAreaElement>) => {
    const id = useId()
    return (
      <div className="row">
        <Label htmlFor={id}>{label}</Label>
        <textarea
          id={id}
          className="form-input"
          ref={ref}
          {...props}
        ></textarea>
      </div>
    )
  }
)
export default memo(TextArea)
