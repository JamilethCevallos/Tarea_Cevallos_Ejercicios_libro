import { useState } from "react";

function App() {
  const [euros, setEuros] = useState("");
  const [dolares, setDolares] = useState(0);

  const convertir = () => {
    const resultado = Number(euros) * 1.08;
    setDolares(resultado.toFixed(2));
  };

  return (
    <div>
      <h1>Conversor de Euros a Dólares</h1>

      <input
        type="number"
        placeholder="Ingrese euros"
        value={euros}
        onChange={(e) => setEuros(e.target.value)}
      />

      <button onClick={convertir}>
        Convertir
      </button>

      <h2>
        Resultado: {dolares} dólares
      </h2>
    </div>
  );
}

export default App;