import { useState } from "react";

function App() {
  const [base, setBase] = useState("");
  const [altura, setAltura] = useState("");
  const [area, setArea] = useState("");

  const calcularArea = () => {
    const resultado = Number(base) * Number(altura);
    setArea(resultado);
  };

  return (
    <div>
      <h1>Área de un Rectángulo</h1>

      <input
        type="number"
        placeholder="Ingrese la base"
        value={base}
        onChange={(e) => setBase(e.target.value)}
      />

      <br />

      <input
        type="number"
        placeholder="Ingrese la altura"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />

      <br />

      <button onClick={calcularArea}>
        Calcular Área
      </button>

      <h2>
        Área: {area}
      </h2>
    </div>
  );
}

export default App;