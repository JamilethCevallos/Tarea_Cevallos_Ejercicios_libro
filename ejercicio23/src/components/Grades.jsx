// src/components/Grades.jsx
import { useState } from 'react';

const Grades = ({ onCalcular }) => {
  const [celsius, setCelsius] = useState(0);

  const enviarCambio = (e) => {
    const valorCelsius = Number(e.target.value);
    setCelsius(valorCelsius);
    onCalcular((9 / 5) * valorCelsius + 32);
  };

  return (
    <div>
      <input type="text" value={celsius} onChange={enviarCambio} />
    </div>
  );
};

export default Grades;