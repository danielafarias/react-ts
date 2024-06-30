import React from "react"
import Button from "./Button";
import { Input } from "./Input";
import { Checkbox } from "./Checkbox";

function App() {
  const [total, setTotal] = React.useState(0);
  const [date, setDate] = React.useState("");

  const increment: React.MouseEventHandler = (event) => {
    console.log(event.pageX);
    setTotal((total) => total + 1);
  }

  return (
    <div>
      <p>Total: {total}</p>
      <Button className="btn" id="main-btn" size="1.5rem" total={total} setTotal={setTotal}>Incrementar</Button>
      <hr />
      <p>Data: {date}</p>
      <Input id="name" label="Nome" />
      <Input id="email" label="E-mail" type="email" />
      <Input id="date" label="Data" type="date" value={date} onChange={(e) => setDate(e.currentTarget.value)} />
      <Input id="email" label="E-mail" type="email" />
      <Input id="hour" label="Hora" type="time" />
      <hr/>
      <Checkbox label="Termos e Condições" />
    </div>
  )
}

export default App
