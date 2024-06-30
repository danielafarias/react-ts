import React from 'react'

type InputProps = React.ComponentProps<"input"> & {
    label: string;
    id: string;
}; 

export const Input = ({ label, id, ...rest }: InputProps) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
        <label htmlFor={id}>{label}</label>
        <input name={id} id={id} {...rest} />
    </div>
  )
}
