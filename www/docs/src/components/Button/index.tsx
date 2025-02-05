import React from "react"
import clsx from "clsx"

type ButtonProps = {
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
} & React.HTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({
  className = "",
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx("btn-primary", className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
