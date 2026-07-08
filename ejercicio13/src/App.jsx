// src/App.jsx
import { useState } from 'react';
import ComponenteMultiple from './components/ComponenteMultiple';

const App = () => {
  const [dato1, setDato1] = useState(0);
  const [dato2, setDato2] = useState(0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ejercicio Props con Renderizado Condicional</h1>
      
      {/* Inputs para recoger los valores en tiempo real */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Dato 1 (Euros / Grados / Ancho)" 
          onChange={(e) => setDato1(Number(e.target.value))} 
        />
        <input 
          type="text" 
          placeholder="Dato 2 (Alto del rectángulo)" 
          onChange={(e) => setDato2(Number(e.target.value))} 
        />
      </div>

      {/* Renderizado de las tres opciones usando el mismo componente hijo */}
      <ComponenteMultiple opcion={1} dato1={dato1} />
      <ComponenteMultiple opcion={2} dato1={dato1} />
      <ComponenteMultiple opcion={3} dato1={dato1} dato2={dato2} />
    </div>
  );
};

export default App;