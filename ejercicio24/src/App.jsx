// src/App.jsx
import { useState } from 'react';
import Area from './components/Area';

const App = () => {
  const [resultadoArea, setResultadoArea] = useState(0);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Calculador de Superficie (Rectángulo)</h1>
      <Area onCalcular={setResultadoArea} />
      <p>La superficie total es: {resultadoArea}</p>
    </div>
  );
};

export default App;