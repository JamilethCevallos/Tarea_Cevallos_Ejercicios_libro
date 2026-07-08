
const Producto = ({ nombre }) => {
  return (
    <li style={{ padding: '8px', background: '#eee', margin: '5px 0', borderRadius: '4px', listStyle: 'none' }}>
      {nombre}
    </li>
  );
};

export default Producto;