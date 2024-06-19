import React from 'react'

type ButtonProps = {
    size?: string;
    children: React.ReactNode;
    onClick?: () => void;
} 

const Button = (props: ButtonProps) => {
  return (
    <button style={{ fontSize: props.size }} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button