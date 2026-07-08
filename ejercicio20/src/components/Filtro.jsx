
const Filtro = ({ categoria, activa, onCambiarFiltro }) => {
  return (
    <button
      onClick={() => onCambiarFiltro(categoria)}
      style={{
        padding: '8px 16px',
        marginRight: '5px',
        cursor: 'pointer',
        background: activa ? '#28a745' : '#fff',
        color: activa ? 'white' : 'black',
        border: '1px solid #28a745',
        borderRadius: '4px'
      }}
    >
      {categoria}
    </button>
  );
};

export default Filtro;