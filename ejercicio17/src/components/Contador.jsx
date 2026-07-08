
const Contador = ({ id, valor, onIncrementar }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '10px', background: '#f9f9f9', margin: '5px 0', borderRadius: '4px', maxWidth: '250px' }}>
      <span>Contador {id}: <strong>{valor}</strong></span>
      <button onClick={() => onIncrementar(id)} style={{ padding: '5px 10px', cursor: 'pointer' }}>
        +1
      </button>
    </div>
  );
};

export default Contador;