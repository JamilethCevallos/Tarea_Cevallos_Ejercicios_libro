import { useRef, useState } from "react";

function App() {
  const widthRef = useRef();
  const heightRef = useRef();

  const [area, setArea] = useState(0);

  const calcular = () => {
    const ancho = Number(widthRef.current.value);
    const alto = Number(heightRef.current.value);

    setArea(ancho * alto);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Calcular superficie de un rectángulo</h2>

      <input
        type="number"
        ref={widthRef}
        placeholder="Ancho"
      />

      <br /><br />

      <input
        type="number"
        ref={heightRef}
        placeholder="Alto"
      />

      <br /><br />

      <button onClick={calcular}>
        Calcular
      </button>

      <h3>Área: {area}</h3>
    </div>
  );
}

export default App;