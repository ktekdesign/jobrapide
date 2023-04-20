import { ButtonHTMLAttributes, FC, ReactNode, memo } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const { className, ...rest } = props
  return (
    <button className={`button ${className} ${rest.type}`} {...rest}>
      {children}
    </button>
  )
}
export default memo(Button)
