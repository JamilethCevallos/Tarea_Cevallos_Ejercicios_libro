import { useState } from "react";

function App() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState("");

  const sumar = () => {
    setResultado(Number(numero1) + Number(numero2));
  };

  const restar = () => {
    setResultado(Number(numero1) - Number(numero2));
  };

  const multiplicar = () => {
    setResultado(Number(numero1) * Number(numero2));
  };

  const dividir = () => {
    if (Number(numero2) !== 0) {
      setResultado(Number(numero1) / Number(numero2));
    } else {
      setResultado("No se puede dividir para cero");
    }
  };

  return (
    <div>
      <h1>Calculadora Básica</h1>

      <input
        type="number"
        placeholder="Primer número"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
      />

      <br />

      <input
        type="number"
        placeholder="Segundo número"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
      />

      <br />

      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={multiplicar}>Multiplicar</button>
      <button onClick={dividir}>Dividir</button>

      <h2>
        Resultado: {resultado}
      </h2>
    </div>
  );
}

export default App;