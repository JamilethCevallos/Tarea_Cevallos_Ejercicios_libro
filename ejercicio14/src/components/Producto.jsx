// src/components/Producto.jsx
const Producto = ({ nombre, precio, categoria }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0', borderRadius: '6px', background: '#fafafa' }}>
      <h3>{nombre}</h3>
      <p>Precio: <strong>${precio}</strong></p>
      <p><small>Categoría: {categoria}</small></p>
    </div>
  );
};

export default Producto;