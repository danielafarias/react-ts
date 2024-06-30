import React from 'react'

/* type ButtonProps = React.PropsWithChildren<{
    size?: string;
    onClick?: () => void;
}>; */

type ButtonProps = React.ComponentProps<"button"> & {
  size?: string;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}; 

const Button = ({ size, children, total, setTotal, ...rest }: ButtonProps) => {
  return (
    <button style={{ fontSize: size }} onClick={() => setTotal((t: number) => t + 1)} {...rest}>{total}</button>
  )
}

export default Button; 