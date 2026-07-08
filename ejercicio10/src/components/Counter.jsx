import { useState } from "react";

function Counter() {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Contador</h2>

      <h1>{contador}</h1>

      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>

      <button
        onClick={() => setContador(contador - 1)}
        style={{ marginLeft: "10px" }}
      >
        Decrementar
      </button>

      <button
        onClick={() => setContador(0)}
        style={{ marginLeft: "10px" }}
      >
        Reiniciar
      </button>
    </div>
  );
}

export default Counter;