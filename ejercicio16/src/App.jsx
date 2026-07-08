// src/App.jsx
import { useState } from 'react';
import Tarea from './components/Tarea';

const App = () => {
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Estudiar React" },
    { id: 2, texto: "Hacer la tarea de redes" },
    { id: 3, texto: "Configurar el servidor Express" }
  ]);

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'left', lineHeight: '1.5' }}>
      <h1>Lista de Tareas</h1>
      <div>
        {tareas.map((t) => (
          <Tarea 
            key={t.id} 
            id={t.id} 
            texto={t.texto} 
            onEliminar={eliminarTarea} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;