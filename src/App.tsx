import React from "react"
import Button from "./Button";
import { Input } from "./Input";
import { Checkbox } from "./Checkbox";
import Video from "./Video";
import useFetch from "./useFetch";

function user() {
  return ({
    name: "Daniela",
    profession: "Programadora"
  });
}

type User = {
  name: string;
  profession: string;
}

type Sell =  {
  id: string;
  nome: string;
  preco: number;
  status: string;
  pagamento: string;
  parcelas: null | number;
  data: string;
}

function App() {
  const [total, setTotal] = React.useState(0);
  const [date, setDate] = React.useState("");
  const [userData, setUserData] = React.useState<null | User>(null);
  const [initialDate, setInitialDate] = React.useState("");
  const [finalDate, setFinalDate] = React.useState("");
  const [sellData, setSellData] = React.useState<null | Sell[]>(null);

  const increment: React.MouseEventHandler = (event) => {
    console.log(event.pageX);
    setTotal((total) => total + 1);
  }


  React.useEffect(() => {
    setTimeout(() => {
      setUserData(user());
    }, 1000);
  }, [])

  React.useEffect(() => {
    if (initialDate !== null && finalDate !== null) {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://data.origamid.dev/vendas/?inicio=${initialDate}&final=${finalDate}`);
          
          const data: Sell[] = await response.json();
          setSellData(data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [initialDate, finalDate]);

  const a = useFetch("https://data.origamid.dev/produtos");

  React.useEffect(() => {
    console.log(a)
  }, [a]);

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
      <hr />
      <Checkbox label="Termos e Condições" />
      <hr />
      {userData !== null &&
        <div>
          <p>Nome: {userData.name}</p>
          <p>Profissão: {userData.profession}</p>
        </div>
      }
      <hr />
      <Input id="date" label="Início" type="date" value={initialDate} onChange={(e) => setInitialDate(e.currentTarget.value)} />
      <Input id="date" label="Final" type="date" value={finalDate} onChange={(e) => setFinalDate(e.currentTarget.value)} />
      {
        sellData !== null && 
        (
          sellData.map(sell => (
          <div>
            <p>Nome: {sell.nome}</p>
            <p>Preço: {sell.preco}</p>
          </div>
          ))
        )
      }
      <hr />
      <Video />
    </div>
  )
}

export default App
