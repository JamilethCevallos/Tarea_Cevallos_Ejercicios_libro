
const Pestaña = ({ id, titulo, activa, onSeleccionar }) => {
  return (
    <button
      onClick={() => onSeleccionar(id)}
      style={{
        padding: '10px 20px',
        cursor: 'pointer',
        background: activa ? '#007bff' : '#eee',
        color: activa ? 'white' : 'black',
        border: '1px solid #ccc',
        borderBottom: activa ? 'none' : '1px solid #ccc',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        marginRight: '2px'
      }}
    >
      {titulo}
    </button>
  );
};

export default Pestaña;