
import { useState } from 'react';
import Filtro from './components/Filtro';

const App = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  const tareas = [
    { id: 1, texto: "Comprar pan", categoria: "Hogar" },
    { id: 2, texto: "Revisar correo", categoria: "Trabajo" },
    { id: 3, texto: "Limpiar la sala", categoria: "Hogar" },
    { id: 4, texto: "Terminar informe", categoria: "Trabajo" }
  ];

  const tareasFiltradas = categoriaSeleccionada === "Todos"
    ? tareas
    : tareas.filter(t => t.categoria === categoriaSeleccionada);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'left', lineHeight: '1.5' }}>
      <h1>Filtrado de Tareas</h1>
      
      <div style={{ marginBottom: '15px' }}>
        {["Todos", "Hogar", "Trabajo"].map((cat) => (
          <Filtro
            key={cat}
            categoria={cat}
            activa={categoriaSeleccionada === cat}
            onCambiarFiltro={setCategoriaSeleccionada}
          />
        ))}
      </div>

      <ul style={{ paddingLeft: '20px' }}>
        {tareasFiltradas.map((t) => (
          <li key={t.id} style={{ margin: '5px 0' }}>
            {t.texto} <span style={{ fontSize: '12px', color: '#777' }}>({t.categoria})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;