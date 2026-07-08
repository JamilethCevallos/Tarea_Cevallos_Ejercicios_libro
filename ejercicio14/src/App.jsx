
import Producto from './components/Producto';

const App = () => {
  const listadoProductos = [
    { id: 101, nombre: "Laptop Gamer", precio: 1200, categoria: "Electrónica" },
    { id: 102, nombre: "Teclado Mecánico", precio: 85, categoria: "Accesorios" },
    { id: 103, nombre: "Monitor 4K", precio: 350, categoria: "Electrónica" },
    { id: 104, nombre: "Ratón Ergonómico", precio: 45, categoria: "Accesorios" }
  ];

  return (

    <div style={{ padding: '20px', maxWidth: '500px', fontFamily: 'Arial, sans-serif', textAlign: 'left', lineHeight: '1.5', color: '#333' }}>
      <h1 style={{ marginBottom: '5px' }}>Catálogo de Productos</h1>
      <p style={{ margin: '0 0 20px 0', color: '#666' }}>Renderizado dinámico de listas usando arreglos:</p>

      {listadoProductos.map((prod) => (
        <Producto 
          key={prod.id} 
          nombre={prod.nombre} 
          precio={prod.precio} 
          categoria={prod.categoria} 
        />
      ))}
    </div>
  );
};

export default App;