// src/components/Dollars.jsx
import { useState } from 'react';

const Dollars = ({ onCalcular }) => {
  const [euros, setEuros] = useState(0);

  const enviarCambio = (e) => {
    const valorEuros = Number(e.target.value);
    setEuros(valorEuros);
    onCalcular(valorEuros * 2);
  };

  return (
    <div>
      <input type="text" value={euros} onChange={enviarCambio} />
    </div>
  );
};

export default Dollars;