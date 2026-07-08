import { useState } from "react";

function Grades() {
  const [celsius, setCelsius] = useState("");

  const fahrenheit = (Number(celsius) * 9) / 5 + 32;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Conversor de Grados</h2>

      <input
        type="number"
        placeholder="Ingrese grados Celsius"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
      />

      <h3>Fahrenheit: {fahrenheit}</h3>
    </div>
  );
}

export default Grades;