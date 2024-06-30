import React from 'react'

/* type ButtonProps = React.PropsWithChildren<{
    size?: string;
    onClick?: () => void;
}>; */

type ButtonProps = React.ComponentProps<"button"> & {
  size?: string;
}; 

const Button = ({ size, children, ...rest }: ButtonProps) => {
  return (
    <button style={{ fontSize: size }} {...rest}>{children}</button>
  )
}

export default Button