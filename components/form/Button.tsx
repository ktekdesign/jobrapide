import {
  ButtonHTMLAttributes,
  LegacyRef,
  ReactNode,
  forwardRef,
  memo,
} from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  label: string
}
// eslint-disable-next-line react/display-name
const Button = forwardRef(
  (
    { children, label, ...props }: ButtonProps,
    ref: LegacyRef<HTMLButtonElement>
  ) => (
    <button aria-label={label} title={label} ref={ref} {...props}>
      {children}
    </button>
  )
)
export default memo(Button)
