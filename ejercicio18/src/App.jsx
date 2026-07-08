
import { useState } from 'react';
import Item from './components/Item';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, nombre: "Leche", comprado: false },
    { id: 2, nombre: "Pan", comprado: false },
    { id: 3, nombre: "Huevos", comprado: true }
  ]);

  const cambiarEstadoItem = (id) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, comprado: !item.comprado } : item))
    );
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'left', lineHeight: '1.5' }}>
      <h1>Lista de la Compra (Checklist)</h1>
      <div>
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            nombre={item.nombre}
            comprado={item.comprado}
            onToggle={cambiarEstadoItem}
          />
        ))}
      </div>
    </div>
  );
};

export default App;