// src/App.jsx
import { useState } from 'react';
import Estrella from './components/Estrella';

const App = () => {
  const [puntuacion, setPuntuacion] = useState(0);
  const totalEstrellas = [1, 2, 3, 4, 5];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'left', lineHeight: '1.5' }}>
      <h1>Sistema de Calificación</h1>
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        {totalEstrellas.map((pos) => (
          <Estrella
            key={pos}
            posicion={pos}
            marcada={pos <= puntuacion}
            onCalificar={setPuntuacion}
          />
        ))}
      </div>

      <p>Has seleccionado {puntuacion} de 5 estrellas.</p>
    </div>
  );
};

export default App;