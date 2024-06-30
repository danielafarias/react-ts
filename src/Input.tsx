import React from 'react'

type InputProps = React.ComponentProps<"input"> & {
    label: string;
}; 

export const Input = ({ label, ...rest }: InputProps) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
        <label htmlFor={label}>{label}</label>
        <input name={label} id={label} {...rest} type="text" />
    </div>
  )
}
