import { useState } from "react";

function Area() {
  const [base, setBase] = useState("");
  const [altura, setAltura] = useState("");

  const area = (Number(base) * Number(altura)) / 2;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Calcular Área del Triángulo</h2>

      <input
        type="number"
        placeholder="Base"
        value={base}
        onChange={(e) => setBase(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Altura"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />

      <br /><br />

      <h3>Área: {area}</h3>
    </div>
  );
}

export default Area;