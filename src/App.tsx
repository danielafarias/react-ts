import React from "react"
import Button from "./Button";

function App() {
  const [total, setTotal] = React.useState(0);

  function increment() {
    setTotal((total) => total + 1);
  }

  return (
    <div>
      <p>Total: {total}</p>
      <Button className="btn" id="main-btn" size="1.5rem" onClick={increment}>Incrementar</Button>
    </div>
  )
}

export default App
