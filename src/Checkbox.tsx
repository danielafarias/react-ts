import React from 'react'

type CheckboxProps = {
    label: string;
};

export const Checkbox = ({ label }: CheckboxProps) => {
  const [value, setValue] = React.useState(true);

  /* const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.currentTarget.checked);
  }*/

  return (
    <label style={{
            padding: "1rem",
            border: `2x solid ${value ? "#22dd5a" : "#F70"}`
        }}
    >
        <input type="checkbox" checked={value} onChange={({ currentTarget }) => setValue(currentTarget.checked)} />
        {label}
    </label>
  )
}
