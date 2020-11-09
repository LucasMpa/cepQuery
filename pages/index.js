import { useState } from "react";

export default function Home() {
  return (
    <div>
      <h3>Home de teste</h3>
      <Contador />
    </div>
  );
}

function Contador() {
  const [count, setCount] = useState(1);

  function AdicionarContador() {
    setCount(count + 1);
  }
  function ReduzirContador() {
    if (count === 0) {
      alert("Não é possível reduzir para menos que 0");
    } else 
    setCount(count - 1);
  }
  return (
    <div>
      <h3>{count}</h3>
      <br />
      <button onClick={AdicionarContador}>Adicionar</button>
      <button onClick={ReduzirContador}>Reduzir</button>
    </div>
  );
}

export default Home;
