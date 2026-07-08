import { useRef, useState } from "react";

function App() {
  const grados = useRef();
  const [resultado, setResultado] = useState("");

  const convertir = () => {
    const celsius = Number(grados.current.value);
    const fahrenheit = (celsius * 9) / 5 + 32;

    setResultado(fahrenheit.toFixed(2));
  };

  return (
    <div>
      <h1>Conversor de Celsius a Fahrenheit</h1>

      <input
        type="number"
        ref={grados}
        placeholder="Ingrese grados Celsius"
      />

      <button onClick={convertir}>
        Convertir
      </button>

      <h2>
        Resultado: {resultado} °F
      </h2>
    </div>
  );
}

export default App;