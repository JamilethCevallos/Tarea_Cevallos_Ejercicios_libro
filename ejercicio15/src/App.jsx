
import { useState } from 'react';
import Producto from './components/Producto';

const App = () => {
 
  const [productos, setProductos] = useState(["Manzana", "Plátano", "Naranja"]);
  

  const [nuevoProducto, setNuevoProducto] = useState("");

  const gestionarEnvio = (e) => {
    e.preventDefault(); 
    if (nuevoProducto.trim() === "") return; // Si está vacío, no hace nada

    
    setProductos([...productos, nuevoProducto]);
    
    
    setNuevoProducto("");
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', fontFamily: 'Arial, sans-serif', textAlign: 'left', lineHeight: '1.5' }}>
      <h1>Lista de Compras Dinámica</h1>
      
      {/* Formulario para añadir elementos */}
      <form onSubmit={gestionarEnvio} style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Escribe un producto..." 
          value={nuevoProducto}
          onChange={(e) => setNuevoProducto(e.target.value)}
          style={{ padding: '8px', marginRight: '5px', width: '200px' }}
        />
        <button type="submit" style={{ padding: '8px 12px' }}>Añadir</button>
      </form>

      {/* Renderizado de la lista */}
      <ul style={{ padding: 0 }}>
        {productos.map((prod, index) => (
          <Producto key={index} nombre={prod} />
        ))}
      </ul>
    </div>
  );
};

export default App;