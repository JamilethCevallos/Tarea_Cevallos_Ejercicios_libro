// src/App.jsx
import { useState } from 'react';
import Pestaña from './components/Pestaña';

const App = () => {
  const [pestañaActiva, setPestañaActiva] = useState(1);

  const pestañas = [
    { id: 1, titulo: "Inicio", contenido: "Bienvenido a la página principal." },
    { id: 2, titulo: "Perfil", contenido: "Aquí puedes ver los datos de tu usuario." },
    { id: 3, titulo: "Ajustes", contenido: "Configuraciones generales del sistema." }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'left', lineHeight: '1.5' }}>
      <h1>Sistema de Pestañas (Tabs)</h1>
      
      <div style={{ display: 'flex' }}>
        {pestañas.map((p) => (
          <Pestaña
            key={p.id}
            id={p.id}
            titulo={p.titulo}
            activa={pestañaActiva === p.id}
            onSeleccionar={setPestañaActiva}
          />
        ))}
      </div>

      <div style={{ padding: '20px', border: '1px solid #ccc', background: '#fff', maxWidth: '400px', minHeight: '100px' }}>
        <p>{pestañas.find((p) => p.id === pestañaActiva)?.contenido}</p>
      </div>
    </div>
  );
};

export default App;