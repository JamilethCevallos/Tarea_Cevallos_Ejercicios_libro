import { useState } from "react";

function Dollars() {
  const [euros, setEuros] = useState("");

  const dolares = Number(euros) * 2;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Euros a Dólares</h2>

      <input
        type="number"
        placeholder="Ingrese euros"
        value={euros}
        onChange={(e) => setEuros(e.target.value)}
      />

      <h3>Dólares: {dolares}</h3>
    </div>
  );
}

export default Dollars;