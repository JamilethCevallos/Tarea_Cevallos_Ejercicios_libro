// src/components/Area.jsx
import { useState } from 'react';

const Area = ({ onCalcular }) => {
  const [base, setBase] = useState(0);
  const [altura, setAltura] = useState(0);

  const cambiarBase = (e) => {
    const b = Number(e.target.value);
    setBase(b);
    onCalcular(b * altura);
  };

  const cambiarAltura = (e) => {
    const h = Number(e.target.value);
    setAltura(h);
    onCalcular(base * h);
  };

  return (
    <div>
      <input type="text" placeholder="Base" value={base} onChange={cambiarBase} />
      <input type="text" placeholder="Altura" value={altura} onChange={cambiarAltura} style={{ marginLeft: '10px' }} />
    </div>
  );
};

export default Area;